package com.team.computer.api.admin;

import java.util.LinkedHashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.team.computer.mapper.ProductMapper;
import com.team.computer.util.utils;

@RestController
@RequestMapping("/api/admin/product")
public class ManageAPIController {
    @Autowired ProductMapper prod_mapper;
    @GetMapping("/list")
    public Map<String,Object> getProductList(@RequestParam Integer type)
    {
        Map<String,Object> map = new LinkedHashMap<String,Object>();
        
        if () prod_mapper.selectCpuList()) ;
        
        return map;
    }
}
