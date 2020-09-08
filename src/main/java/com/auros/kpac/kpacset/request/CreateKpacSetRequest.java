package com.auros.kpac.kpacset.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Size;

@Setter
@Getter
public class CreateKpacSetRequest {

    @JsonProperty
    @Size(max = 250)
    private String title;

    @JsonProperty
    private String kpacId;
}