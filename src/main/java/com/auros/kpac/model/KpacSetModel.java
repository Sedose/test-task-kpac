package com.auros.kpac.model;

import com.auros.kpac.entity.KpacEntity;
import lombok.Builder;
import lombok.Getter;

import java.util.Set;


@Getter
@Builder
public class KpacSetModel {
    private long id;
    private String title;
    private Set<KpacEntity> kpacEntitySet;
}
