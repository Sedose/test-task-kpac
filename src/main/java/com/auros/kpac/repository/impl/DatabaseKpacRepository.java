package com.auros.kpac.repository.impl;

import com.auros.kpac.Constants;
import com.auros.kpac.dto.KpacFilterDto;
import com.auros.kpac.entity.KpacEntity;
import com.auros.kpac.repository.KpacRepository;
import lombok.RequiredArgsConstructor;
import lombok.val;
import lombok.var;
import org.apache.commons.lang3.ObjectUtils;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Component;

import java.sql.Date;
import java.util.List;

@RequiredArgsConstructor
@Component("kpacRepository")
public class DatabaseKpacRepository implements KpacRepository {

    private static final String SQL_SELECT_ALL = "SELECT id, title, description, creation_date FROM kpacs";
    private static final String SQL_DELETE_BY_ID = "DELETE FROM kpacs WHERE id = :id";
    private static final String SQL_CREATE_NEW = "INSERT INTO kpacs (title, description, creation_date) " +
            "values (:title, :description, :creation_date)";

    private static final String PARAM_NAME_ID = "id";
    private static final String PARAM_NAME_TITLE = "title";
    private static final String PARAM_NAME_DESCRIPTION = "description";
    private static final String PARAM_NAME_CREATION_DATE = "creation_date";
    private static final String PARAM_NAME_CREATION_DATE_FROM = "creation_date_from";
    private static final String PARAM_NAME_CREATION_DATE_TO = "creation_date_to";
    private static final Date DATE_MIN = Date.valueOf("1000-01-01");
    private static final Date DATE_MAX = Date.valueOf("9999-12-31");
    private static final String PARAM_NAME_COLUMN_NAME = "column_name";
    private static final String PARAM_NAME_SORT_DIRECTION = "sort_direction";

    private final JdbcTemplate jdbcTemplate;
    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;

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
        val namedParameters = new MapSqlParameterSource(PARAM_NAME_ID, id);
        namedParameterJdbcTemplate.update(SQL_DELETE_BY_ID, namedParameters);
    }

    @Override
    public void create(KpacEntity kpacEntity) {
        val namedParameters = new MapSqlParameterSource()
                .addValue(PARAM_NAME_TITLE, kpacEntity.getTitle())
                .addValue(PARAM_NAME_DESCRIPTION, kpacEntity.getDescription())
                .addValue(PARAM_NAME_CREATION_DATE, kpacEntity.getCreationDate());
        namedParameterJdbcTemplate.update(SQL_CREATE_NEW, namedParameters);
    }

    private static final String SQL_SELECT_ALL_FILTERED
            = "SELECT id, title, description, creation_date FROM kpacs "
            + "WHERE creation_date >= :creation_date_from "
            + "AND creation_date <= :creation_date_to ";
    private static final String TITLE_LIKE = "AND title LIKE :title ";
    private static final String DESCRIPTION_LIKE = "AND description LIKE :description ";

    @Override
    public List<KpacEntity> findAllFilteredSorted(KpacFilterDto kpacFilterDto) {
        var sqlSelectAllFiltered = SQL_SELECT_ALL_FILTERED;
        if (ObjectUtils.isNotEmpty(kpacFilterDto.getTitle())) {
            sqlSelectAllFiltered += TITLE_LIKE;
        }
        if (ObjectUtils.isNotEmpty(kpacFilterDto.getDescription())) {
            sqlSelectAllFiltered += DESCRIPTION_LIKE;
        }

        val namedParameters = new MapSqlParameterSource()
                .addValue(PARAM_NAME_CREATION_DATE_FROM, ObjectUtils.isEmpty(kpacFilterDto.getCreationDateFrom()) ?
                        DATE_MIN : Date.valueOf(kpacFilterDto.getCreationDateFrom()))
                .addValue(PARAM_NAME_CREATION_DATE_TO, ObjectUtils.isEmpty(kpacFilterDto.getCreationDateTo()) ?
                        DATE_MAX : Date.valueOf(kpacFilterDto.getCreationDateTo()))
                .addValue(PARAM_NAME_TITLE, "%" + kpacFilterDto.getTitle() + "%")
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
