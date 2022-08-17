package com.team.computer.controller.product;

import org.springframework.lang.Nullable;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/product")
public class ProductController {
    
    @GetMapping("/{prodName}")
    public String getProductCase(@PathVariable String prodName, Model model){
        model.addAttribute("type", prodName);
        return "/product/"+prodName;
    }

    @GetMapping("/detail")
    public String getProductDetail(@RequestParam @Nullable Integer seq, @RequestParam @Nullable String type) {

        return "/product/detail";
    }
}
