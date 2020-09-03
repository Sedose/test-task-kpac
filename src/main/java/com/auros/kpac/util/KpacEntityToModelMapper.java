package com.auros.kpac.util;

import com.auros.kpac.entity.KpacEntity;
import com.auros.kpac.model.KpacModel;

import java.util.List;
import java.util.stream.Collectors;

public class KpacEntityToModelMapper {

    public static List<KpacModel> toKpacModelList(List<KpacEntity> kpacEntities) {
        return kpacEntities.stream()
                .map(KpacEntityToModelMapper::toKpacModel)
                .collect(Collectors.toList());
    }

    private static KpacModel toKpacModel(KpacEntity kpacEntity) {
        return new KpacModel(
                kpacEntity.getId(),
                kpacEntity.getTitle(),
                kpacEntity.getDescription(),
                kpacEntity.getCreationDateTime(),
                kpacEntity.getKpacSetEntities()
        );
    }
}
