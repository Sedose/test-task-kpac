package com.auros.kpac.kpacset.repository.impl;

import com.auros.kpac.Constants;
import com.auros.kpac.entity.KpacSetEntity;
import com.auros.kpac.kpacset.dto.KpacSetFilterDto;
import com.auros.kpac.kpacset.repository.KpacSetRepository;
import lombok.RequiredArgsConstructor;
import lombok.val;
import lombok.var;
import org.apache.commons.lang3.ObjectUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.math.BigInteger;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@Component("kpacSetRepository")
public class DatabaseKpacSetRepository implements KpacSetRepository {

    private static final String SQL_SELECT_ALL = "SELECT id, title FROM kpac_sets";
    private static final String SQL_TITLE_LIKE = " WHERE title LIKE :title";
    private static final String SQL_DELETE_BY_ID = "DELETE FROM kpac_sets WHERE id = :id";
    private static final String SQL_FIND_BY_ID = "SELECT id, title FROM kpac_sets WHERE id = ?";
    private static final String SQL_SELECT_COUNT_BY_ID = "SELECT count(id) FROM kpac_sets WHERE id = ?";

    private final JdbcTemplate jdbcTemplate;
    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    private SimpleJdbcInsert simpleJdbcInsert;

    @Autowired
    public void setDataSource(DataSource dataSource) {
        this.simpleJdbcInsert = new SimpleJdbcInsert(dataSource).withTableName("kpac_sets")
                .usingGeneratedKeyColumns("id");
    }

    @Override
    public List<KpacSetEntity> findAll() {
        return jdbcTemplate.query(SQL_SELECT_ALL,
                (resultSet, rowNum) ->
                        KpacSetEntity.builder()
                                .id(resultSet.getInt(Constants.COLUMN_NAME_ID))
                                .title(resultSet.getString(Constants.COLUMN_NAME_TITLE))
                                .build());
    }

    @Override
    public List<KpacSetEntity> findAllFiltered(KpacSetFilterDto kpacSetFilterDto) {
        var sqlSelectAllFiltered = SQL_SELECT_ALL;
        if (ObjectUtils.isNotEmpty(kpacSetFilterDto.getTitle())) {
            sqlSelectAllFiltered += SQL_TITLE_LIKE;
        }
        val namedParameters = new MapSqlParameterSource()
                .addValue(Constants.PARAM_NAME_TITLE, "%" + kpacSetFilterDto.getTitle() + "%");

        return namedParameterJdbcTemplate.query(sqlSelectAllFiltered, namedParameters,
                (resultSet, rowNum) ->
                        KpacSetEntity.builder()
                                .id(resultSet.getLong(Constants.COLUMN_NAME_ID))
                                .title(resultSet.getString(Constants.COLUMN_NAME_TITLE))
                                .build());
    }

    @Override
    public BigInteger create(KpacSetEntity kpacSetEntity) {
        Map<String, Object> parameters = new HashMap<>(1);
        parameters.put("title", kpacSetEntity.getTitle());
        Number generatedId = simpleJdbcInsert.executeAndReturnKey(parameters);
        return (BigInteger) generatedId;
    }

    @Override
    public void deleteById(long id) {
        val namedParameters = new MapSqlParameterSource(Constants.PARAM_NAME_ID, id);
        namedParameterJdbcTemplate.update(SQL_DELETE_BY_ID, namedParameters);
    }

    @Override
    public KpacSetEntity findById(String kpacSetId) {
        return jdbcTemplate.queryForObject(SQL_FIND_BY_ID,
                (resultSet, rowNum) ->
                        KpacSetEntity.builder()
                                .id(resultSet.getLong(Constants.COLUMN_NAME_ID))
                                .title(resultSet.getString(Constants.COLUMN_NAME_TITLE))
                                .build(),
                kpacSetId);
    }

    @Override
    public boolean existsById(String kpacSetId) {
        Integer rowsNumber = jdbcTemplate.queryForObject(SQL_SELECT_COUNT_BY_ID, Integer.class, kpacSetId);
        return rowsNumber == null || rowsNumber > 0;
    }
}

