package com.team.computer.controller.product;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RequestMapping("/product")
public class ProductController {
    
    @GetMapping("/{prodName}")
    public String getProductCase(@PathVariable String prodName){

        return "/product/"+prodName;
    }

    @GetMapping("/detail/{prodName}")
    public String getProductDetail(@PathVariable String prodName) {

        return "product/detail/"+prodName;
    }
}
