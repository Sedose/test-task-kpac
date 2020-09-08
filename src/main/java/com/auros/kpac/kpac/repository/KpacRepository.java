package com.auros.kpac.kpac.repository;

import com.auros.kpac.entity.KpacEntity;
import com.auros.kpac.kpac.dto.KpacFilterDto;

import java.math.BigInteger;
import java.util.List;

public interface KpacRepository {

    KpacEntity findById(String id);

    List<KpacEntity> findAll();

    void deleteById(long id);

    BigInteger create(KpacEntity kpacEntity);

    List<KpacEntity> findAllFiltered(KpacFilterDto kpacFilterDto);

    List<KpacEntity> findAllByKpacSetId(String kpacSetId);

    List<KpacEntity> findAllByKpacSetIdFiltered(String kpacSetId, KpacFilterDto kpacFilterDto);
}
