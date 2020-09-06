package com.auros.kpac.controller;

import com.auros.kpac.service.KpacService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@RequiredArgsConstructor
public class KpacController {

    private final KpacService kpacService;

    @GetMapping("/kpacs")
    private String kpacsView() {
        return "kpac/kpacList";
    }
}
