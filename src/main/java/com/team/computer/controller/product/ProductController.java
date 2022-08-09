package com.team.computer.controller.product;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RequestMapping("/product")
public class ProductController {
    
    @GetMapping("/case")
    public String getProductCase(){

        return "/product/case";
    }

    @GetMapping("/cooler")
    public String getProductColler(){

        return "/product/cooler";
    }

    @GetMapping("/cpu")
    public String getProductCpu(){

        return "/product/cpu";
    }

    @GetMapping("/gpu")
    public String getProductGpu(){

        return "/product/gpu";
    }

    @GetMapping("/hdd")
    public String getProductHdd(){

        return "/product/hdd";
    }

    @GetMapping("/mainboard")
    public String getProductMainboard(){

        return "/product/mainboard";
    }

    @GetMapping("/memory")
    public String getProductMemory(){

        return "/product/memory";
    }

    @GetMapping("/power")
    public String getProductPower(){

        return "/product/power";
    }
}
