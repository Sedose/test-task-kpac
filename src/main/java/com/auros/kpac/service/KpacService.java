package com.auros.kpac.service;

import com.auros.kpac.kpacset.request.CreateKpacSetRequest;
import com.auros.kpac.model.KpacModel;
import com.auros.kpac.model.KpacSetModel;
import com.auros.kpac.kpac.request.CreateKpacRequest;

import java.time.LocalDate;
import java.util.List;

public interface KpacService {
    List<KpacModel> obtainAllKpacs();

    void deleteKpacById(long id);

    void createKpac(CreateKpacRequest createKpacRequest);

    List<KpacModel> obtainAllKpacsFilteredSorted(
            String title,
            String description,
            LocalDate createdDateFrom,
            LocalDate createdDateTo,
            String sortDirection,
            String sortProperty);

    List<KpacSetModel> obtainAllKpacSetsFilteredSorted(String id, String title, String sortDirection, String sortProperty);

    void createKpacSet(CreateKpacSetRequest createKpacSetRequest);

    void deleteKpacSetById(long id);

    KpacSetModel obtainKpacSetById(String kpacSetId);

    List<KpacModel> obtainKpacsByKpacSetIdFilteredSorted(
            String kpacSetId,
            String title,
            String description,
            LocalDate creationDateFrom,
            LocalDate creationDateTo,
            String sortDirection,
            String sortProperty);

    void deleteKpacFromKpacSet(long kpacSetId, long kpacId);
}
