package com.auros.kpac.kpackpacset.impl;

import com.auros.kpac.Constants;
import com.auros.kpac.entity.KpacKpacSet;
import com.auros.kpac.kpackpacset.KpacKpacSetRepository;
import lombok.RequiredArgsConstructor;
import lombok.val;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component("kpacKpacSetRepository")
public class DatabaseKpacKpacSetRepository implements KpacKpacSetRepository {

    private static final String INSERT_ONE = "INSERT INTO kpacs_kpac_sets VALUES(?, ?)";
    private static final String SQL_DELETE_ALL_BY_KPAC_SET_ID = "DELETE FROM kpacs_kpac_sets WHERE kpac_set_id = :id";
    private static final String SQL_DELETE_ALL_BY_KPAC_ID = "DELETE FROM kpacs_kpac_sets WHERE kpac_id = :id";
    private static final String SQL_DELETE_BY_ID = "DELETE FROM kpacs_kpac_sets WHERE kpac_id = :kpacId AND kpac_set_id = :kpacSetId";

    private static final String PARAM_NAME_KPAC_ID = "kpacId";
    private static final String PARAM_NAME_KPAC_SET_ID = "kpacSetId";

    private final JdbcTemplate jdbcTemplate;
    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    @Override
    public void create(KpacKpacSet kpacKpacSet) {
        jdbcTemplate.update(INSERT_ONE, kpacKpacSet.getKpacId(), kpacKpacSet.getKpacSetId());
    }

    @Override
    public void deleteAllByKpacSetId(long id) {
        val namedParameters = new MapSqlParameterSource(Constants.PARAM_NAME_ID, id);
        namedParameterJdbcTemplate.update(SQL_DELETE_ALL_BY_KPAC_SET_ID, namedParameters);
    }

    @Override
    public void deleteAllByKpacId(long id) {
        val namedParameters = new MapSqlParameterSource(Constants.PARAM_NAME_ID, id);
        namedParameterJdbcTemplate.update(SQL_DELETE_ALL_BY_KPAC_ID, namedParameters);
    }

    @Override
    public void deleteKpacKpacSetById(long kpacSetId, long kpacId) {
        val namedParameters = new MapSqlParameterSource(PARAM_NAME_KPAC_ID, kpacId)
                .addValue(PARAM_NAME_KPAC_SET_ID, kpacSetId);
        namedParameterJdbcTemplate.update(SQL_DELETE_BY_ID, namedParameters);
    }
}
