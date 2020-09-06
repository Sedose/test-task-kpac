package com.auros.kpac.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.sql.Date;
import java.util.Set;

@Getter
@Builder
@AllArgsConstructor
public class KpacEntity {
    private long id;
    private String title;
    private String description;
    private Date creationDate;
    private Set<KpacSetEntity> kpacSetEntities;
}
