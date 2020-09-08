package com.auros.kpac.kpackpacset;

import com.auros.kpac.entity.KpacKpacSet;

public interface KpacKpacSetRepository {

    void create(KpacKpacSet kpacKpacSet);

    void deleteAllByKpacSetId(long id);

    void deleteAllByKpacId(long id);

    void deleteKpacKpacSetById(long kpacSetId, long kpacId);
}
