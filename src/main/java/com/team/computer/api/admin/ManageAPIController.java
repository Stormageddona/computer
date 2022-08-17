package com.team.computer.api.admin;

import java.util.LinkedHashMap;
import java.util.Map;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.team.computer.mapper.AdminMapper;
import com.team.computer.mapper.ProductMapper;
import com.team.computer.util.utils;

@RestController
@RequestMapping("/api/admin/product")
public class ManageAPIController {
    @Autowired ProductMapper prod_mapper;
    @Autowired AdminMapper admin_mapper;
    @DeleteMapping("")
    public Map<String,Object> getProductList(@RequestParam String type,@RequestParam Integer seq)
    {
        Map<String,Object> map = new LinkedHashMap<String,Object>();
        // System.out.println(type+"_info" + "  " + utils.getTableNameBySeqType(type)+"seq" + "  " +  seq);

        admin_mapper.deleteProductBySeq(type+"_info",utils.getTableNameBySeqType(type)+"seq", seq) ;
        map.put("status",true) ;
        map.put("message","삭제되었습니다.") ;

        
        return map;
    }
    
    @PutMapping("/{type}")
    public Map<String,Object> putProduct(@PathVariable String type,@RequestParam Integer seq)
    {
        Map<String,Object> map = new LinkedHashMap<String,Object>();
        
        prod_mapper.insertProduct()

        return map;
    }
}
