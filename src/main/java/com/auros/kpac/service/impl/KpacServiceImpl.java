package com.auros.kpac.service.impl;

import com.auros.kpac.entity.KpacEntity;
import com.auros.kpac.model.KpacModel;
import com.auros.kpac.repository.KpacRepository;
import com.auros.kpac.request.CreateKpacRequest;
import com.auros.kpac.service.KpacService;
import com.auros.kpac.util.KpacMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service("kpacService")
@RequiredArgsConstructor
public class KpacServiceImpl implements KpacService {

    private final KpacRepository kpacRepository;

    @Override
    public List<KpacModel> obtainAllKpacs() {
        List<KpacEntity> kpacEntities = kpacRepository.findAll();
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
        kpacRepository.save(KpacMapper.toKpacEntityWithRandomId(createKpacRequest));
    }
}
