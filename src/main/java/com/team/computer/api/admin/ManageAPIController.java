package com.team.computer.api.admin;

import java.util.LinkedHashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/manage")
public class ManageAPIController {
    @GetMapping("/products")
    public Map<String,Object> getManageProductInfo(){
        Map<String,Object> map = new LinkedHashMap<String,Object>();
        return map;
    }
}
