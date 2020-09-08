package com.auros.kpac.model;

import com.auros.kpac.entity.KpacSetEntity;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

import java.time.LocalDate;
import java.util.Set;

@Getter
@ToString
@AllArgsConstructor
public class KpacModel {
    private String id;
    private String title;
    private String description;
    @JsonFormat(pattern = "YYYY-MM-dd")
    private LocalDate creationDate;
    private Set<KpacSetEntity> kpacSetEntities;
}
