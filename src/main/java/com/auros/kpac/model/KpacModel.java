package com.auros.kpac.model;

import com.auros.kpac.entity.KpacSetEntity;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

import java.time.LocalDateTime;
import java.util.Set;

@Getter
@ToString
@AllArgsConstructor
public class KpacModel {
    private String id;
    private String title;
    private String description;
    @JsonFormat(pattern = "YYYY-MM-dd HH:mm")
    @JsonSerialize(using = LocalDateTimeSerializer.class)
    @JsonDeserialize(using = LocalDateTimeDeserializer.class)
    private LocalDateTime creationDateTime;
    private Set<KpacSetEntity> kpacSetEntities;
}
