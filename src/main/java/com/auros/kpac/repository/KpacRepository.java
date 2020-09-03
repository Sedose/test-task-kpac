package com.auros.kpac.repository;

import com.auros.kpac.entity.KpacEntity;

import java.util.List;

public interface KpacRepository {
    List<KpacEntity> findAll();
}
