package com.auros.kpac.controller;

import com.auros.kpac.model.KpacModel;
import com.auros.kpac.request.CreateKpacRequest;
import com.auros.kpac.service.KpacService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/v1/kpacs")
@RequiredArgsConstructor
public class KpacRestController {

    private final KpacService kpacService;

    @GetMapping
    public List<KpacModel> allKpacs() {
        List<KpacModel> kpacModels = kpacService.obtainAllKpacs();
        log.info("allKpacs() kpacModels:");
        kpacModels.forEach(kpacModel -> log.info(kpacModel.toString()));
        return kpacModels;
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteKpacById(@PathVariable long id) {
        log.info("deleteKpacById() id:");
        log.info(String.valueOf(id));
        kpacService.deleteById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void createKpac(@RequestBody CreateKpacRequest createKpacRequest) {
        log.info("createKpac() createKpacRequest:");
        log.info(String.valueOf(createKpacRequest));
        kpacService.createKpac(createKpacRequest);
    }

}
