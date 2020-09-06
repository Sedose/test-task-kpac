package com.auros.kpac.service;

import com.auros.kpac.model.KpacModel;
import com.auros.kpac.request.CreateKpacRequest;

import java.time.LocalDate;
import java.util.List;

public interface KpacService {
    List<KpacModel> obtainAllKpacs();

    void deleteById(long id);

    void createKpac(CreateKpacRequest createKpacRequest);

    List<KpacModel> obtainAllKpacsFilteredSorted(
            String title,
            String description,
            LocalDate createdDateFrom,
            LocalDate createdDateTo,
            String sortDirection,
            String sortProperty);
}
