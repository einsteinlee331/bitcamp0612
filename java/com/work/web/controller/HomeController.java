package com.work.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * HomeController
 */
@Controller
public class HomeController {

    @RequestMapping("/")
    public String index() {
        System.out.println("Root URL 경로로 들어옴");
        return "index";
    }
}