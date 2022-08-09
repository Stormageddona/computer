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
    public Map<String, Object> getProductCaseList(@RequestParam @Nullable String keyword, @RequestParam @Nullable Integer page) {
        Map<String, Object> m = new LinkedHashMap<String, Object>();
        if(page == null) page=1;
        m.put("caseListDesc", prod_mapper.selectCaseListDesc((page-1)*10, keyword));
        m.put("caseListAsc", prod_mapper.selectCaseListAsc((page-1)*10, keyword));
        m.put("caseListCnt", prod_mapper.selectCaseListCnt(keyword));
        return m;
    }

    @GetMapping("/cooler")
    public Map<String, Object> getProductCoolerList(@RequestParam @Nullable String keyword, @RequestParam @Nullable Integer page) {
        Map<String, Object> m = new LinkedHashMap<String, Object>();
        if(page == null) page=1;
        m.put("coolerListDesc", prod_mapper.selectCoolerListDesc((page-1)*10, keyword));
        m.put("coolerListAsc", prod_mapper.selectCoolerListAsc((page-1)*10, keyword));
        m.put("coolerListCnt", prod_mapper.selectCoolerListCnt(keyword));
        return m;
    }

    @GetMapping("/cpu")
    public Map<String, Object> getProductCpuList(@RequestParam @Nullable String keyword, @RequestParam @Nullable Integer page) {
        Map<String, Object> m = new LinkedHashMap<String, Object>();
        if(page == null) page=1;
        m.put("cpuListDesc", prod_mapper.selectCpuListDesc((page-1)*10, keyword));
        m.put("cpuListAsc", prod_mapper.selectCpuListAsc((page-1)*10, keyword));
        m.put("cpuListCnt", prod_mapper.selectCpuListCnt(keyword));
        return m;
    }

    @GetMapping("/gpu")
    public Map<String, Object> getProductGpuList(@RequestParam @Nullable String keyword, @RequestParam @Nullable Integer page) {
        Map<String, Object> m = new LinkedHashMap<String, Object>();
        if(page == null) page=1;
        m.put("gpuListDesc", prod_mapper.selectGpuListDesc((page-1)*10, keyword));
        m.put("gpuListAsc", prod_mapper.selectGpuListAsc((page-1)*10, keyword));
        m.put("gpuListCnt", prod_mapper.selectGpuListCnt(keyword));
        return m;
    }
}
