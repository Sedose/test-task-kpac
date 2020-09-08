package com.auros.kpac.util;

import com.auros.kpac.entity.KpacEntity;
import com.auros.kpac.entity.KpacSetEntity;
import com.auros.kpac.kpac.request.CreateKpacRequest;
import com.auros.kpac.model.KpacModel;
import com.auros.kpac.model.KpacSetModel;

import java.sql.Date;
import java.util.HashSet;
import java.util.List;
import java.util.stream.Collectors;

public class KpacMapper {

    public static List<KpacModel> toKpacModelList(List<KpacEntity> kpacEntities) {
        return kpacEntities.stream()
                .map(KpacMapper::toKpacModel)
                .collect(Collectors.toList());
    }

    public static List<KpacSetModel> toKpacSetModelList(List<KpacSetEntity> kpacSetEntities) {
        return kpacSetEntities.stream()
                .map(KpacMapper::toKpacSetModel)
                .collect(Collectors.toList());
    }

    public static KpacSetModel toKpacSetModel(KpacSetEntity kpacSetEntity) {
        return KpacSetModel.builder()
                .id(kpacSetEntity.getId())
                .title(kpacSetEntity.getTitle())
                .kpacEntitySet(kpacSetEntity.getKpacEntitySet())
                .build();
    }

    public static KpacModel toKpacModel(KpacEntity kpacEntity) {
        return new KpacModel(
                String.valueOf(kpacEntity.getId()),
                kpacEntity.getTitle(),
                kpacEntity.getDescription(),
                kpacEntity.getCreationDate().toLocalDate(),
                kpacEntity.getKpacSetEntities()
        );
    }

    public static KpacEntity toKpacEntity(CreateKpacRequest createKpacRequest) {
        return KpacEntity.builder()
                .title(createKpacRequest.getTitle())
                .description(createKpacRequest.getDescription())
                .creationDate(Date.valueOf(createKpacRequest.getCreationDate()))
                .kpacSetEntities(new HashSet<>())
                .build();
    }
}
