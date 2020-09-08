package com.auros.kpac.controller;

import com.auros.kpac.service.KpacService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.Map;

@Controller
@RequiredArgsConstructor
public class CommonKpacController {

    private final KpacService kpacService;

    @GetMapping("/kpacs")
    public String kpacsView() {
        return "kpac/kpacList";
    }

    @GetMapping("/sets")
    public String kpacSets(Map<String, Object> model) {
        model.put("kpacs", kpacService.obtainAllKpacs());
        return "kpac/kpacSets";
    }

    @GetMapping("/set/{kpacSetId}")
    public String kpacSet(@PathVariable String kpacSetId, Map<String, Object> model) {
        model.put("kpacSet", kpacService.obtainKpacSetById(kpacSetId));
        return "kpac/kpacSet";
    }
}
