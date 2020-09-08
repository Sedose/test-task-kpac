package com.auros.kpac.controller.advice;

import com.auros.kpac.kpacset.exception.KpacSetNotFound;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class CommonKpacControllerAdvice {

    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(KpacSetNotFound.class)
    public void handleNotFound() {
        // Nothing to do
    }
}
