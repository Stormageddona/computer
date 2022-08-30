package com.team.computer.api.admin;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;
import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.lang.Nullable;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.team.computer.api.FileAPIController;
import com.team.computer.mapper.AdminMapper;
import com.team.computer.mapper.ImageMapper;
import com.team.computer.mapper.ProductMapper;
import com.team.computer.util.FileUtils;
import com.team.computer.util.utils;

import ch.qos.logback.core.FileAppender;

@RestController
@RequestMapping("/api/admin/product")
public class ManageAPIController {
    @Autowired ProductMapper prod_mapper;
    @Autowired ImageMapper img_mapper ;
    @Value("${spring.servlet.multipart.location}") String path;
    @DeleteMapping("")
    public Map<String,Object> getProductList(@RequestParam String type,@RequestParam Integer seq)
    {
        Map<String,Object> map = new LinkedHashMap<String,Object>();
        // System.out.println(type+"_info" + "  " + utils.getTableNameBySeqType(type)+"seq" + "  " +  seq);
        prod_mapper.deleteProductBySeq(type+"_info",utils.getTableNameBySeqType(type)+"seq", seq) ;
        map.put("status",true) ;
        map.put("message","삭제되었습니다.") ;
        
        return map;
    }
    
    @PutMapping("/{type}")
    @Transactional
    public Map<String,Object> putProduct(@PathVariable String type,@RequestBody Map<String,Object> data, @RequestParam @Nullable String img) throws Exception
    {
        Map<String,Object> map = new LinkedHashMap<String,Object>();
        if (img != null && !img.equals(""))
        {
            File A = new File(path+"/images"+img) ;
            File B = new File(path+"/images"+img.replace("temp", "products")) ;
            Files.move(A.toPath(), B.toPath(), StandardCopyOption.REPLACE_EXISTING) ;
            Map<String,Object> temp = new LinkedHashMap<String,Object>() ;
            temp.put("img",img.replace("/temp", "products")) ;
            img_mapper.insertImage(temp);
            data.put(utils.getTableNameBySeqType(type)+"img_seq",temp.get("img_seq")) ;
        }
        type = type+"_info" ;
        prod_mapper.insertProduct(type, data) ;
        map.put("status",true) ;
        map.put("message","정상적으로 추가되었습니다.") ;
        return map;
    }
    
    @GetMapping("/{type}")
    public Map<String,Object> getProduct(@PathVariable String type,@RequestParam Integer seq)
    {
        Map<String,Object> map = new LinkedHashMap<String,Object>();
        for (Entry<String, Object> entrySet : prod_mapper.selectProductDetailBySeq(type+"_info",utils.getTableNameBySeqType(type), seq).entrySet())
        {
            String str = entrySet.getKey();
            map.put(str.replace(utils.getTableNameBySeqType(type), ""),entrySet.getValue()) ;
        }
        return map;
    }

    @PatchMapping("/{type}")
    public Map<String,Object> patchProduct(@PathVariable String type,@RequestParam Integer seq,@RequestBody Map<String,Object> data)
    {
        Map<String,Object> map = new LinkedHashMap<String,Object>();
        String prefix = utils.getTableNameBySeqType(type) ;
        type = type+"_info" ;
        data.put("seq",seq) ;
        prod_mapper.updateProduct(type, prefix , data) ;
        map.put("status",true) ;
        map.put("message","정상적으로 수정되었습니다.") ;
        return map;
    }
}
