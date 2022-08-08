package com.team.computer.controller.account;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/account")
public class UserController {
    @GetMapping("/login")
    public String getAccountLogin()
    {
        return "/account/login" ;
    }
}
