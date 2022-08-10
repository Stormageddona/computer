package com.team.computer.controller.admin;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin")
public class ManageController {
    @GetMapping("/manage_product")
    public String getManageProducts() {
        return "/admin/manage_product";
    }

}
