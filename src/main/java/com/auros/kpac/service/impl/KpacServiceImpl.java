package com.auros.kpac.service.impl;

import com.auros.kpac.entity.KpacKpacSet;
import com.auros.kpac.entity.KpacSetEntity;
import com.auros.kpac.kpac.dto.KpacFilterDto;
import com.auros.kpac.kpac.repository.KpacRepository;
import com.auros.kpac.kpac.request.CreateKpacRequest;
import com.auros.kpac.kpackpacset.KpacKpacSetRepository;
import com.auros.kpac.kpacset.dto.KpacSetFilterDto;
import com.auros.kpac.kpacset.exception.KpacSetNotFound;
import com.auros.kpac.kpacset.repository.KpacSetRepository;
import com.auros.kpac.kpacset.request.CreateKpacSetRequest;
import com.auros.kpac.model.KpacModel;
import com.auros.kpac.model.KpacSetModel;
import com.auros.kpac.service.KpacService;
import com.auros.kpac.util.KpacMapper;
import lombok.RequiredArgsConstructor;
import lombok.val;
import lombok.var;
import org.apache.commons.lang3.ObjectUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigInteger;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service("kpacService")
@RequiredArgsConstructor
public class KpacServiceImpl implements KpacService {

    private final KpacRepository kpacRepository;
    private final KpacSetRepository kpacSetRepository;
    private final KpacKpacSetRepository kpacKpacSetRepository;

    @Override
    public List<KpacModel> obtainAllKpacs() {
        val kpacEntities = kpacRepository.findAll();
        return !kpacEntities.isEmpty() ?
                KpacMapper.toKpacModelList(kpacEntities) :
                new ArrayList<>();
    }

    @Override
    @Transactional
    public void deleteKpacById(long id) {
        kpacKpacSetRepository.deleteAllByKpacId(id);
        kpacRepository.deleteById(id);
    }

    @Override
    @Transactional
    public void createKpac(CreateKpacRequest createKpacRequest) {
        BigInteger kpacId = kpacRepository.create(KpacMapper.toKpacEntity(createKpacRequest));
        if (createKpacRequest.getKpacSetId() != null) {
            kpacKpacSetRepository.create(
                    KpacKpacSet.builder()
                            .kpacId(kpacId)
                            .kpacSetId(new BigInteger(createKpacRequest.getKpacSetId()))
                            .build()
            );
        }
    }

    @Override
    public List<KpacModel> obtainAllKpacsFilteredSorted(
            String title,
            String description,
            LocalDate creationDateFrom,
            LocalDate creationDateTo,
            String sortDirection,
            String sortProperty) {
        val kpacFilterDto = new KpacFilterDto(title, description, creationDateFrom, creationDateTo);
        var kpacModels = KpacMapper.toKpacModelList(isEachFieldNull(kpacFilterDto) ?
                kpacRepository.findAll() :
                kpacRepository.findAllFiltered(kpacFilterDto));
        if (ObjectUtils.allNotNull(sortDirection, sortProperty)) {
            kpacModels = filterKpacModels(kpacModels, sortDirection, sortProperty);
        }
        return kpacModels;
    }

    @Override
    public List<KpacSetModel> obtainAllKpacSetsFilteredSorted(String id, String title, String sortDirection, String sortProperty) {
        val kpacSetFilterDto = new KpacSetFilterDto(id, title);
        var kpacSetModels = KpacMapper.toKpacSetModelList(isEachFieldNull(kpacSetFilterDto) ?
                kpacSetRepository.findAll() :
                kpacSetRepository.findAllFiltered(kpacSetFilterDto));
        if (ObjectUtils.allNotNull(sortDirection, sortProperty)) {
            kpacSetModels = filterKpacSetModels(kpacSetModels, sortDirection, sortProperty);
        }
        return kpacSetModels;
    }

    @Override
    @Transactional
    public void createKpacSet(CreateKpacSetRequest createKpacSetRequest) {
        val kpacEntity = kpacRepository.findById(createKpacSetRequest.getKpacId());
        BigInteger kpacSetId = kpacSetRepository.create(
                KpacSetEntity.builder()
                        .title(createKpacSetRequest.getTitle())
                        .kpacEntitySet(Collections.singleton(kpacEntity))
                        .build()
        );
        kpacKpacSetRepository.create(
                KpacKpacSet.builder()
                        .kpacId(BigInteger.valueOf(kpacEntity.getId()))
                        .kpacSetId(kpacSetId)
                        .build()
        );
    }

    @Override
    @Transactional
    public void deleteKpacSetById(long id) {
        kpacKpacSetRepository.deleteAllByKpacSetId(id);
        kpacSetRepository.deleteById(id);
    }

    @Override
    public KpacSetModel obtainKpacSetById(String kpacSetId) {
        if (kpacSetRepository.existsById(kpacSetId)) {
            return KpacMapper.toKpacSetModel(kpacSetRepository.findById(kpacSetId));
        } else {
            throw new KpacSetNotFound();
        }
    }

    @Override
    public List<KpacModel> obtainKpacsByKpacSetIdFilteredSorted(
            String kpacSetId, String title, String description, LocalDate creationDateFrom,
            LocalDate creationDateTo, String sortDirection, String sortProperty) {
        val kpacFilterDto = new KpacFilterDto(title, description, creationDateFrom, creationDateTo);
        var kpacModels = KpacMapper.toKpacModelList(isEachFieldNull(kpacFilterDto) ?
                kpacRepository.findAllByKpacSetId(kpacSetId) :
                kpacRepository.findAllByKpacSetIdFiltered(kpacSetId, kpacFilterDto));
        if (ObjectUtils.allNotNull(sortDirection, sortProperty)) {
            kpacModels = filterKpacModels(kpacModels, sortDirection, sortProperty);
        }
        return kpacModels;
    }

    @Override
    public void deleteKpacFromKpacSet(long kpacSetId, long kpacId) {
        kpacKpacSetRepository.deleteKpacKpacSetById(kpacSetId, kpacId);
    }

    private List<KpacModel> filterKpacModels(List<KpacModel> kpacModels, String sortDirection, String sortProperty) {
        boolean isSortDescending = "desc".equals(sortDirection);
        return kpacModels.stream().sorted(
                (kpac1, kpac2) -> {
                    switch (sortProperty) {
                        case "id" :
                            int compareResultById = Long.compare(Long.parseLong(kpac1.getId()), Long.parseLong(kpac2.getId()));
                            return isSortDescending ?  -compareResultById : compareResultById;
                        case "title" :
                            int compareResultByTitle = kpac1.getTitle().compareTo(kpac2.getTitle());
                            return isSortDescending ?  -compareResultByTitle : compareResultByTitle;
                        case "description" :
                            int compareResultByDescription = kpac1.getDescription().compareTo(kpac2.getDescription());
                            return isSortDescending ?  -compareResultByDescription : compareResultByDescription;
                        case "creationDate" :
                            int compareResultByCreationDate = kpac1.getCreationDate().compareTo(kpac2.getCreationDate());
                            return isSortDescending ?  -compareResultByCreationDate : compareResultByCreationDate;
                        default:
                            return 1;
                    }
                }
        ).collect(Collectors.toList());
    }

    private List<KpacSetModel> filterKpacSetModels(List<KpacSetModel> kpacSetModels, String sortDirection, String sortProperty) {
        boolean isSortDescending = "desc".equals(sortDirection);
        return kpacSetModels.stream().sorted(
                (kpacSet1, kpacSet2) -> {
                    if ("id".equals(sortProperty)) {
                        int compareResultById = Long.compare(kpacSet1.getId(), kpacSet2.getId());
                        return isSortDescending ? -compareResultById : compareResultById;
                    }
                    if ("title".equals(sortProperty)) {
                        int compareResultByTitle = kpacSet1.getTitle().compareTo(kpacSet2.getTitle());
                        return isSortDescending ? -compareResultByTitle : compareResultByTitle;
                    }
                    return 1;
                }
        ).collect(Collectors.toList());
    }

    private boolean isEachFieldNull(KpacFilterDto kpacFilterDto) {
        return ObjectUtils.allNull(
                kpacFilterDto.getTitle(),
                kpacFilterDto.getDescription(),
                kpacFilterDto.getCreationDateFrom(),
                kpacFilterDto.getCreationDateTo()
        );
    }

    private boolean isEachFieldNull(KpacSetFilterDto kpacFilterDto) {
        return ObjectUtils.allNull(
                kpacFilterDto.getTitle()
        );
    }
}
