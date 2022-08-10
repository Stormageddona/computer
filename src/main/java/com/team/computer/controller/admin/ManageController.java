package com.team.computer.controller.admin;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/admin")
public class ManageController {
    @GetMapping("/product")
    public String getManageProducts(Model model, @RequestParam Integer type) 
    {
        model.addAttribute("type", type) ;
        return "/admin/product";
    }

}
