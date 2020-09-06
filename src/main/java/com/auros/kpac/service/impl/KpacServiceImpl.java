package com.auros.kpac.service.impl;

import com.auros.kpac.dto.KpacFilterDto;
import com.auros.kpac.model.KpacModel;
import com.auros.kpac.repository.KpacRepository;
import com.auros.kpac.request.CreateKpacRequest;
import com.auros.kpac.service.KpacService;
import com.auros.kpac.util.KpacMapper;
import lombok.RequiredArgsConstructor;
import lombok.val;
import lombok.var;
import org.apache.commons.lang3.ObjectUtils;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service("kpacService")
@RequiredArgsConstructor
public class KpacServiceImpl implements KpacService {

    private final KpacRepository kpacRepository;

    @Override
    public List<KpacModel> obtainAllKpacs() {
        val kpacEntities = kpacRepository.findAll();
        return !kpacEntities.isEmpty() ?
                KpacMapper.toKpacModelList(kpacEntities) :
                new ArrayList<>();
    }

    @Override
    public void deleteById(long id) {
        kpacRepository.deleteById(id);
    }

    @Override
    public void createKpac(CreateKpacRequest createKpacRequest) {
        kpacRepository.create(KpacMapper.toKpacEntityWithRandomId(createKpacRequest));
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
        var kpacModels =
                KpacMapper.toKpacModelList(isEachFieldNull(kpacFilterDto) ?
                kpacRepository.findAll() :
                kpacRepository.findAllFilteredSorted(kpacFilterDto));
        if (ObjectUtils.allNotNull(sortDirection, sortProperty)) {
            kpacModels = filter(kpacModels, sortDirection, sortProperty);
        }
        return kpacModels;
    }

    private List<KpacModel> filter(List<KpacModel> kpacModels, String sortDirection, String sortProperty) {
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

    private boolean isEachFieldNull(KpacFilterDto kpacFilterDto) {
        return ObjectUtils.allNull(
                kpacFilterDto.getTitle(),
                kpacFilterDto.getDescription(),
                kpacFilterDto.getCreationDateFrom(),
                kpacFilterDto.getCreationDateTo()
        );
    }
}
