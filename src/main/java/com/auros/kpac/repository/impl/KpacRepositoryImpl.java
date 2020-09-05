package com.auros.kpac.repository.impl;

import com.auros.kpac.entity.KpacEntity;
import com.auros.kpac.repository.KpacRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;

@Repository("kpacRepository")
public class KpacRepositoryImpl implements KpacRepository {

    private static final List<KpacEntity> mockList = new ArrayList<>(Arrays.asList(
            new KpacEntity(
                    1,
                    "First title",
                    "First description",
                    LocalDateTime.now(),
                    new HashSet<>()
            ),
            new KpacEntity(
                    2,
                    "Second title",
                    "Second description",
                    LocalDateTime.now().minusDays(2).plusMinutes(2),
                    new HashSet<>()
            ),
            new KpacEntity(
                    3,
                    "Third title",
                    "Third description",
                    LocalDateTime.now().minusDays(3).minusMinutes(3),
                    new HashSet<>()
            )
    ));

    @Override
    public List<KpacEntity> findAll() {
        return mockList;
    }

    @Override
    public void deleteById(long id) {
        mockList.removeIf(kpac -> id == kpac.getId());
    }

    @Override
    public void save(KpacEntity kpacEntity) {
        mockList.add(kpacEntity);
    }
}
