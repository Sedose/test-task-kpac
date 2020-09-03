package com.auros.kpac.entity;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;
import java.util.Set;

@Getter
@RequiredArgsConstructor
public class KpacEntity {
    private final long id;
    private final String title;
    private final String description;
    private final LocalDateTime creationDateTime;
    private final Set<KpacSetEntity> kpacSetEntities;
}
