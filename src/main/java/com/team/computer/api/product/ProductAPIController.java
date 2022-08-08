package com.team.computer.api.product;

import java.util.LinkedHashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.team.computer.mapper.ProductMapper;

@RestController
@RequestMapping("/api/product")
public class ProductAPIController {
    @Autowired ProductMapper prod_mapper;
    @GetMapping("/case")
    public Map<String, Object> getProductList(@RequestParam @Nullable String keyword, @RequestParam @Nullable Integer page) {
        Map<String, Object> m = new LinkedHashMap<String, Object>();
        if(page == null) page=1;
        m.put("caseListDesc", prod_mapper.selectCaseListDesc((page-1)*10, keyword));
        m.put("caseListAsc", prod_mapper.selectCaseListAsc((page-1)*10, keyword));
        m.put("caseListCnt", prod_mapper.selectCaseListCnt(keyword));
        return m;
    }
}
