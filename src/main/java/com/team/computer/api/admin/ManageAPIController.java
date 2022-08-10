package com.team.computer.api.admin;

import java.util.LinkedHashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.team.computer.mapper.ProductMapper;

@RestController
@RequestMapping("/api/manage")
public class ManageAPIController {
    @Autowired ProductMapper prod_mapper;
    @GetMapping("/products/cpu")
    public Map<String,Object> getManageProductInfo(){
        Map<String,Object> map = new LinkedHashMap<String,Object>();

        return map;
    }
}
