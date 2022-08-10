package com.team.computer.api.product;

import java.util.Calendar;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.Nullable;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.team.computer.data.CaseInfoVO;
import com.team.computer.mapper.ProductMapper;

@RestController
@RequestMapping("/api/product")
public class ProductAPIController {
    @Autowired ProductMapper prod_mapper;

    @GetMapping("/testcase")
    public Map<String, Object> getProductCaseList(@RequestParam Integer count) {
        Map<String, Object> m = new LinkedHashMap<String, Object>();
        
        for (Integer i = 0 ; i < count ; i++)
        {
            CaseInfoVO temp = new CaseInfoVO() ;
            temp.setCsi_company("testcompany_"+(Math.random()*10000));
            temp.setCsi_model_name("testmodel_"+(Math.random()*10000));
            temp.setCsi_name("testname_"+(Math.random()*10000));
            temp.setCsi_price((int)(Math.random()*10000));
            temp.setCsi_release_dt(new Date());
            temp.setCsi_save_socket_num((int)(Math.random()*10000));
            temp.setCsi_size((int)(Math.random()*10000));
            temp.setCsi_use_board((int)(Math.random()*10000));
            prod_mapper.intsertTestCase(temp);
        }
        return m;
    }

    @GetMapping("/case")
    @Transactional
    public Map<String, Object> getProductCaseList(@RequestParam @Nullable String keyword, @RequestParam @Nullable Integer page) {
        Map<String, Object> m = new LinkedHashMap<String, Object>();
        if(page == null) page=1;
        m.put("caseListDesc", prod_mapper.selectCaseList((page-1)*10, keyword, true));
        m.put("caseListAsc", prod_mapper.selectCaseList((page-1)*10, keyword, false));
        m.put("caseListCnt", prod_mapper.selectCaseListCnt((page-1)*10, keyword));
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
