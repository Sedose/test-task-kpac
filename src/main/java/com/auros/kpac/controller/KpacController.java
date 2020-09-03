package com.auros.kpac.controller;

import com.auros.kpac.service.KpacService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Map;

@Controller
@RequiredArgsConstructor
public class KpacController {

    private final KpacService kpacService;

    @GetMapping("/kpacs")
    private String test(Map<String, Object> model) {
        model.put("kpacs", kpacService.obtainAllKpacs());
        return "kpac/kpacList";
    }
}
