package com.auros.kpac.kpacset.repository;

import com.auros.kpac.entity.KpacSetEntity;
import com.auros.kpac.kpacset.dto.KpacSetFilterDto;

import java.math.BigInteger;
import java.util.List;

public interface KpacSetRepository {

    List<KpacSetEntity> findAll();

    List<KpacSetEntity> findAllFiltered(KpacSetFilterDto kpacSetFilterDto);

    BigInteger create(KpacSetEntity build);

    void deleteById(long id);

    KpacSetEntity findById(String kpacSetId);

    boolean existsById(String kpacSetId);
}
