package com.auros.kpac.kpac.repository.impl;

import com.auros.kpac.Constants;
import com.auros.kpac.entity.KpacEntity;
import com.auros.kpac.kpac.dto.KpacFilterDto;
import com.auros.kpac.kpac.repository.KpacRepository;
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
import java.sql.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@Component("kpacRepository")
public class DatabaseKpacRepository implements KpacRepository {

    private static final String SQL_SELECT_ALL = "SELECT id, title, description, creation_date FROM kpacs";
    private static final String SQL_SELECT_ALL_BY_KPAC_SET_ID
            = "SELECT id, title, description, creation_date "
            + "FROM kpacs INNER JOIN kpacs_kpac_sets "
            + "ON kpacs.id = kpacs_kpac_sets.kpac_id "
            + "WHERE kpacs_kpac_sets.kpac_set_id = ?";
    private static final String SQL_SELECT_BY_ID = "SELECT id, title, description, creation_date FROM kpacs WHERE id = ?";
    private static final String SQL_DELETE_BY_ID = "DELETE FROM kpacs WHERE id = :id";
    private static final String SQL_SELECT_ALL_FILTERED
            = "SELECT id, title, description, creation_date FROM kpacs "
            + "WHERE creation_date >= :creation_date_from "
            + "AND creation_date <= :creation_date_to ";
    private static final String SQL_SELECT_ALL_BY_KPAC_SET_ID_FILTERED
            = "SELECT id, title, description, creation_date "
            + "FROM kpacs INNER JOIN kpacs_kpac_sets "
            + "ON kpacs.id = kpacs_kpac_sets.kpac_id "
            + "WHERE kpacs_kpac_sets.kpac_set_id = :kpac_set_id "
            + "AND creation_date >= :creation_date_from "
            + "AND creation_date <= :creation_date_to ";
    private static final String SQL_TITLE_LIKE = "AND title LIKE :title ";
    private static final String SQL_DESCRIPTION_LIKE = "AND description LIKE :description ";

    private static final String PARAM_NAME_DESCRIPTION = "description";
    private static final String PARAM_NAME_CREATION_DATE = "creation_date";
    private static final String PARAM_NAME_CREATION_DATE_FROM = "creation_date_from";
    private static final String PARAM_NAME_CREATION_DATE_TO = "creation_date_to";
    private static final String PARAM_NAME_KPAC_SET_ID = "kpac_set_id";

    private static final Date DATE_MIN = Date.valueOf("1000-01-01");
    private static final Date DATE_MAX = Date.valueOf("9999-12-31");

    private final JdbcTemplate jdbcTemplate;
    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    private SimpleJdbcInsert simpleJdbcInsert;

    @Autowired
    public void setDataSource(DataSource dataSource) {
        this.simpleJdbcInsert = new SimpleJdbcInsert(dataSource).withTableName("kpacs")
                .usingGeneratedKeyColumns("id");
    }

    @Override
    public KpacEntity findById(String id) {
        return jdbcTemplate.queryForObject(SQL_SELECT_BY_ID,
                (resultSet, rowNum) ->
                        KpacEntity.builder()
                                .id(resultSet.getInt(Constants.COLUMN_NAME_ID))
                                .title(resultSet.getString(Constants.COLUMN_NAME_TITLE))
                                .description(resultSet.getString(Constants.COLUMN_NAME_DESCRIPTION))
                                .creationDate(resultSet.getDate(Constants.COLUMN_NAME_CREATION_DATE))
                                .build(), id);
    }

    @Override
    public List<KpacEntity> findAll() {
        return jdbcTemplate.query(SQL_SELECT_ALL,
                (resultSet, rowNum) ->
                        KpacEntity.builder()
                                .id(resultSet.getInt(Constants.COLUMN_NAME_ID))
                                .title(resultSet.getString(Constants.COLUMN_NAME_TITLE))
                                .description(resultSet.getString(Constants.COLUMN_NAME_DESCRIPTION))
                                .creationDate(resultSet.getDate(Constants.COLUMN_NAME_CREATION_DATE))
                                .build());
    }

    @Override
    public void deleteById(long id) {
        val namedParameters = new MapSqlParameterSource(Constants.PARAM_NAME_ID, id);
        namedParameterJdbcTemplate.update(SQL_DELETE_BY_ID, namedParameters);
    }

    @Override
    public BigInteger create(KpacEntity kpacEntity) {
        Map<String, Object> parameters = new HashMap<>(3);
        parameters.put(Constants.PARAM_NAME_TITLE, kpacEntity.getTitle());
        parameters.put(PARAM_NAME_DESCRIPTION, kpacEntity.getDescription());
        parameters.put(PARAM_NAME_CREATION_DATE, kpacEntity.getCreationDate());
        Number generatedId = simpleJdbcInsert.executeAndReturnKey(parameters);
        return (BigInteger) generatedId;
    }

    @Override
    public List<KpacEntity> findAllFiltered(KpacFilterDto kpacFilterDto) {
        var sqlSelectAllFiltered = SQL_SELECT_ALL_FILTERED;
        if (ObjectUtils.isNotEmpty(kpacFilterDto.getTitle())) {
            sqlSelectAllFiltered += SQL_TITLE_LIKE;
        }
        if (ObjectUtils.isNotEmpty(kpacFilterDto.getDescription())) {
            sqlSelectAllFiltered += SQL_DESCRIPTION_LIKE;
        }

        val namedParameters = new MapSqlParameterSource()
                .addValue(PARAM_NAME_CREATION_DATE_FROM, ObjectUtils.isEmpty(kpacFilterDto.getCreationDateFrom()) ?
                        DATE_MIN : Date.valueOf(kpacFilterDto.getCreationDateFrom()))
                .addValue(PARAM_NAME_CREATION_DATE_TO, ObjectUtils.isEmpty(kpacFilterDto.getCreationDateTo()) ?
                        DATE_MAX : Date.valueOf(kpacFilterDto.getCreationDateTo()))
                .addValue(Constants.PARAM_NAME_TITLE, "%" + kpacFilterDto.getTitle() + "%")
                .addValue(PARAM_NAME_DESCRIPTION, "%" + kpacFilterDto.getDescription() + "%");

        return namedParameterJdbcTemplate.query(sqlSelectAllFiltered, namedParameters,
                (resultSet, rowNum) ->
                        KpacEntity.builder()
                                .id(resultSet.getInt(Constants.COLUMN_NAME_ID))
                                .title(resultSet.getString(Constants.COLUMN_NAME_TITLE))
                                .description(resultSet.getString(Constants.COLUMN_NAME_DESCRIPTION))
                                .creationDate(resultSet.getDate(Constants.COLUMN_NAME_CREATION_DATE))
                                .build());
    }

    @Override
    public List<KpacEntity> findAllByKpacSetId(String kpacSetId) {
        return jdbcTemplate.query(SQL_SELECT_ALL_BY_KPAC_SET_ID,
                (resultSet, rowNum) ->
                        KpacEntity.builder()
                                .id(resultSet.getInt(Constants.COLUMN_NAME_ID))
                                .title(resultSet.getString(Constants.COLUMN_NAME_TITLE))
                                .description(resultSet.getString(Constants.COLUMN_NAME_DESCRIPTION))
                                .creationDate(resultSet.getDate(Constants.COLUMN_NAME_CREATION_DATE))
                                .build(), kpacSetId);
    }


    
    @Override
    public List<KpacEntity> findAllByKpacSetIdFiltered(String kpacSetId, KpacFilterDto kpacFilterDto) {
        var sqlSelectAllFiltered = SQL_SELECT_ALL_BY_KPAC_SET_ID_FILTERED;
        if (ObjectUtils.isNotEmpty(kpacFilterDto.getTitle())) {
            sqlSelectAllFiltered += SQL_TITLE_LIKE;
        }
        if (ObjectUtils.isNotEmpty(kpacFilterDto.getDescription())) {
            sqlSelectAllFiltered += SQL_DESCRIPTION_LIKE;
        }

        val namedParameters = new MapSqlParameterSource()
                .addValue(PARAM_NAME_KPAC_SET_ID, kpacSetId)
                .addValue(PARAM_NAME_CREATION_DATE_FROM, ObjectUtils.isEmpty(kpacFilterDto.getCreationDateFrom()) ?
                        DATE_MIN : Date.valueOf(kpacFilterDto.getCreationDateFrom()))
                .addValue(PARAM_NAME_CREATION_DATE_TO, ObjectUtils.isEmpty(kpacFilterDto.getCreationDateTo()) ?
                        DATE_MAX : Date.valueOf(kpacFilterDto.getCreationDateTo()))
                .addValue(Constants.PARAM_NAME_TITLE, "%" + kpacFilterDto.getTitle() + "%")
                .addValue(PARAM_NAME_DESCRIPTION, "%" + kpacFilterDto.getDescription() + "%");

        return namedParameterJdbcTemplate.query(sqlSelectAllFiltered, namedParameters,
                (resultSet, rowNum) ->
                        KpacEntity.builder()
                                .id(resultSet.getInt(Constants.COLUMN_NAME_ID))
                                .title(resultSet.getString(Constants.COLUMN_NAME_TITLE))
                                .description(resultSet.getString(Constants.COLUMN_NAME_DESCRIPTION))
                                .creationDate(resultSet.getDate(Constants.COLUMN_NAME_CREATION_DATE))
                                .build());
    }
}
