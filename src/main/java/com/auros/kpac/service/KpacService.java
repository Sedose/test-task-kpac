package com.auros.kpac.service;

import com.auros.kpac.model.KpacModel;
import com.auros.kpac.request.CreateKpacRequest;

import java.util.List;

public interface KpacService {
    List<KpacModel> obtainAllKpacs();

    void deleteById(long id);

    void createKpac(CreateKpacRequest createKpacRequest);
}
