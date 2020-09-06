package com.auros.kpac.repository;

import com.auros.kpac.dto.KpacFilterDto;
import com.auros.kpac.entity.KpacEntity;

import java.util.List;

public interface KpacRepository {
    List<KpacEntity> findAll();

    void deleteById(long id);

    void create(KpacEntity kpacEntity);

    List<KpacEntity> findAllFilteredSorted(KpacFilterDto kpacFilterDto);
}
