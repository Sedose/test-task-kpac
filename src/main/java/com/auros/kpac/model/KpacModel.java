package com.auros.kpac.model;

import com.auros.kpac.entity.KpacSetEntity;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;
import java.util.Set;

@Getter
@RequiredArgsConstructor
public class KpacModel {
    private final long id;
    private final String title;
    private final String description;
    private final LocalDateTime creationDateTime;
    private final Set<KpacSetEntity> kpacSetEntities;
}
