package com.auros.kpac.controller;

import com.auros.kpac.model.KpacModel;
import com.auros.kpac.request.CreateKpacRequest;
import com.auros.kpac.service.KpacService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/v1/kpacs")
@RequiredArgsConstructor
public class KpacRestController {

    private final KpacService kpacService;

    @GetMapping
    public List<KpacModel> allKpacsFiltered(
            @RequestParam(required = false) String title,
            @RequestParam(required = false) String description,
            @RequestParam(required = false)
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate creationDateFrom,
            @RequestParam(required = false)
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate creationDateTo,
            @RequestParam(required = false) String sortDirection,
            @RequestParam(required = false) String sortProperty) {
        return kpacService.obtainAllKpacsFilteredSorted(title, description, creationDateFrom, creationDateTo, sortDirection, sortProperty);
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteKpacById(@PathVariable long id) {
        kpacService.deleteById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void createKpac(@RequestBody CreateKpacRequest createKpacRequest) {
        kpacService.createKpac(createKpacRequest);
    }
}
