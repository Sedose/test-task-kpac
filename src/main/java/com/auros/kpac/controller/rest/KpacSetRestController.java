package com.auros.kpac.controller.rest;

import com.auros.kpac.kpacset.request.CreateKpacSetRequest;
import com.auros.kpac.model.KpacModel;
import com.auros.kpac.model.KpacSetModel;
import com.auros.kpac.service.KpacService;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/v1/kpac-sets")
@RequiredArgsConstructor
public class KpacSetRestController {

    private final KpacService kpacService;

    @GetMapping
    public List<KpacSetModel> allKpacSetsFiltered(
            @RequestParam(required = false) String id,
            @RequestParam(required = false) String title,
            @RequestParam(required = false) String sortDirection,
            @RequestParam(required = false) String sortProperty) {
        return kpacService.obtainAllKpacSetsFilteredSorted(id, title, sortDirection, sortProperty);
    }

    @GetMapping("/{kpacSetId}/kpacs")
    public List<KpacModel> kpacsByKpacSetIdFiltered(
            @PathVariable String kpacSetId,
            @RequestParam(required = false) String title,
            @RequestParam(required = false) String description,
            @RequestParam(required = false)
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate creationDateFrom,
            @RequestParam(required = false)
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate creationDateTo,
            @RequestParam(required = false) String sortDirection,
            @RequestParam(required = false) String sortProperty) {
        return kpacService.obtainKpacsByKpacSetIdFilteredSorted(kpacSetId, title, description, creationDateFrom,
                creationDateTo, sortDirection, sortProperty);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void createKpacSet(@Valid @RequestBody CreateKpacSetRequest createKpacSetRequest) {
        kpacService.createKpacSet(createKpacSetRequest);
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteKpacSetById(@PathVariable long id) {
        kpacService.deleteKpacSetById(id);
    }

    @DeleteMapping("{kpacSetId}/kpacs/{kpacId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteKpacByIdFromKpacSet(@PathVariable long kpacSetId, @PathVariable long kpacId) {
        kpacService.deleteKpacFromKpacSet(kpacSetId, kpacId);
    }
}
