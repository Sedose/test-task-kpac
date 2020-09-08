package com.auros.kpac.entity;

import lombok.Builder;
import lombok.Getter;

import java.math.BigInteger;

@Getter
@Builder
public class KpacKpacSet {
    private BigInteger kpacId;
    private BigInteger kpacSetId;
}
