package com.auros.kpac.entity;

import lombok.Builder;
import lombok.Getter;

import java.util.Set;

@Getter
@Builder
public class KpacSetEntity {
    private long id;
    private String title;
    private Set<KpacEntity> kpacEntitySet;
}
