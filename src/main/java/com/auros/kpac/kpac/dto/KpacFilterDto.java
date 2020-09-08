package com.auros.kpac.kpac.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDate;

@Getter
@AllArgsConstructor
public class KpacFilterDto {
    private String title;
    private String description;
    private LocalDate creationDateFrom;
    private LocalDate creationDateTo;
}
