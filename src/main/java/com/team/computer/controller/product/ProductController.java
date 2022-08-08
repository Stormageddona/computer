package com.team.computer.controller.product;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RequestMapping("/product")
public class ProductController {
    
    @GetMapping("/product")
    public String getProduct(){

        return "/product/product";
    }
}
