package com.auros.kpac.util;

import com.auros.kpac.entity.KpacEntity;
import com.auros.kpac.model.KpacModel;
import com.auros.kpac.request.CreateKpacRequest;

import java.sql.Date;
import java.util.HashSet;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;
import java.util.stream.Collectors;

public class KpacMapper {

    public static List<KpacModel> toKpacModelList(List<KpacEntity> kpacEntities) {
        return kpacEntities.stream()
                .map(KpacMapper::toKpacModel)
                .collect(Collectors.toList());
    }

    private static KpacModel toKpacModel(KpacEntity kpacEntity) {
        return new KpacModel(
                String.valueOf(kpacEntity.getId()),
                kpacEntity.getTitle(),
                kpacEntity.getDescription(),
                kpacEntity.getCreationDate().toLocalDate(),
                kpacEntity.getKpacSetEntities()
        );
    }

    public static KpacEntity toKpacEntityWithRandomId(CreateKpacRequest createKpacRequest) {
        return KpacEntity.builder()
                .id(ThreadLocalRandom.current().nextLong())
                .title(createKpacRequest.getTitle())
                .description(createKpacRequest.getDescription())
                .creationDate(Date.valueOf(createKpacRequest.getCreationDate()))
                .kpacSetEntities(new HashSet<>())
                .build();
    }
}
