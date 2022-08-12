package com.team.computer.api.product;

import java.util.Calendar;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.Nullable;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.team.computer.data.CaseInfoVO;
import com.team.computer.mapper.ProductMapper;
import com.team.computer.util.utils;

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

    @GetMapping("/{type}")
    @Transactional
    public Map<String, Object> getProductCaseList(@RequestParam @Nullable String keyword, @RequestParam @Nullable String page,@RequestParam @Nullable Boolean desc,@PathVariable @Nullable String type,@RequestParam @Nullable String search,@RequestParam @Nullable String ordertype) {
        Map<String, Object> m = new LinkedHashMap<String, Object>();
        if(search == null || search.equals("null")) search = "total" ;
        if (ordertype == null || ordertype.equals("null")) ordertype = "release_dt" ;
        Integer num = 1 ;
        System.out.println(page);
        if(page != null && !page.equals("null")) num = Integer.parseInt(page);
        if (keyword.equals("null")) keyword = null ;
        System.out.println("시작" + (num-1)*10 + " , 키워드 : " + keyword + " ,정렬 : " + desc + "  " + type + "  " + search + "  " + ordertype);
        List<Map<String, Object>> temp = prod_mapper.selectList((num-1)*10, keyword, desc,type,search,ordertype) ;
        List<Map<String, Object>> list = new LinkedList<Map<String,Object>>() ;
        System.out.println(temp);
        String seq_type = utils.getTableNameBySeqType(type);
        for (Map<String, Object> i : temp)
        {
            String table = (String)i.get("tbl_name")+"_info" ;
            Integer seq = (Integer)i.get("seq") ;
            Map<String,Object> data = new LinkedHashMap<String,Object>() ;
            for (Entry<String, Object> entrySet : prod_mapper.selectProductDetailBySeq(table,seq_type, seq).entrySet())
            {
                String str = entrySet.getKey().replace(seq_type, "") ;
                data.put(str,entrySet.getValue() ) ;
            }

            list.add(data) ;
            System.out.println(data);
        }
        

        m.put("List", list);
        m.put("ListCnt", prod_mapper.selectListCnt((num-1)*10, keyword,type,search,ordertype));
        return m;
    }

    @GetMapping("/detail")
    public Map<String, Object> getDetailProduct(@RequestParam String type, @RequestParam Integer seq) {
        String seq_type = utils.getTableNameBySeqType(type) ;
        Map<String, Object> temp = prod_mapper.selectProductDetailBySeq(type+"_info", seq_type, seq);
        Map<String, Object> data = new LinkedHashMap<String,Object>() ;
        for (Entry<String, Object> entrySet : temp.entrySet())
        {
            data.put(entrySet.getKey().replace(seq_type, ""),entrySet.getValue() ) ;
        
        }
        return data;
    }

    @GetMapping("/add/{type}")
    public Map<String, Object> getProductAddData(@PathVariable String type)
    {
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        // String str = utils.getTableNameBySeqType(type) ;
        map.put("column",prod_mapper.selectProductColumn(type+"_info")) ;
        map.put("column_kr",prod_mapper.selectProductColumnComment(type+"_info")) ;
        // System.out.println(stype);
        return map;
    }
    // @GetMapping("/cooler")
    // public Map<String, Object> getProductCoolerList(@RequestParam @Nullable String keyword, @RequestParam @Nullable Integer page,@RequestParam Boolean desc) {
    //     Map<String, Object> m = new LinkedHashMap<String, Object>();
    //     if(page == null) page=1;
    //     // m.put("coolerList", prod_mapper.selectCoolerList((page-1)*10, keyword, desc));
    //     // m.put("coolerListCnt", prod_mapper.selectCoolerListCnt((page-1)*10, keyword));
    //     return m;
    // }

    // @GetMapping("/cpu")
    // public Map<String, Object> getProductCpuList(@RequestParam @Nullable String keyword, @RequestParam @Nullable Integer page,@RequestParam Boolean desc) {
    //     Map<String, Object> m = new LinkedHashMap<String, Object>();
    //     if(page == null) page=1;
    //     m.put("cpuList", prod_mapper.selectCpuList((page-1)*10, keyword, desc));
    //     m.put("cpuListCnt", prod_mapper.selectCpuListCnt((page-1)*10, keyword));
    //     return m;
    // }

    // @GetMapping("/gpu")
    // public Map<String, Object> getProductGpuList(@RequestParam @Nullable String keyword, @RequestParam @Nullable Integer page,@RequestParam Boolean desc) {
    //     Map<String, Object> m = new LinkedHashMap<String, Object>();
    //     if(page == null) page=1;
    //     m.put("gpuList", prod_mapper.selectGpuList((page-1)*10, keyword, desc));
    //     m.put("gpuListCnt", prod_mapper.selectGpuListCnt((page-1)*10, keyword));
    //     return m;
    // }

    // @GetMapping("/hdd")
    // public Map<String, Object> getProductHddList(@RequestParam @Nullable String keyword, @RequestParam @Nullable Integer page,@RequestParam Boolean desc) {
    //     Map<String, Object> m = new LinkedHashMap<String, Object>();
    //     if(page == null) page=1;
    //     m.put("hddList", prod_mapper.selectHddList((page-1)*10, keyword, desc));
    //     m.put("hddListCnt", prod_mapper.selectHddListCnt((page-1)*10, keyword));
    //     return m;
    // }

    // @GetMapping("/mainboard")
    // public Map<String, Object> getProductMainboardList(@RequestParam @Nullable String keyword, @RequestParam @Nullable Integer page,@RequestParam Boolean desc) {
    //     Map<String, Object> m = new LinkedHashMap<String, Object>();
    //     if(page == null) page=1;
    //     m.put("mainboardList", prod_mapper.selectMainboardList((page-1)*10, keyword, desc));
    //     m.put("mainboardListCnt", prod_mapper.selectMainboardListCnt((page-1)*10, keyword));
    //     return m;
    // }

    // @GetMapping("/memory")
    // public Map<String, Object> getProductMemoryList(@RequestParam @Nullable String keyword, @RequestParam @Nullable Integer page,@RequestParam Boolean desc) {
    //     Map<String, Object> m = new LinkedHashMap<String, Object>();
    //     if(page == null) page=1;
    //     m.put("mainboardList", prod_mapper.selectMemoryList((page-1)*10, keyword, desc));
    //     m.put("mainboardListCnt", prod_mapper.selectMemoryListCnt((page-1)*10, keyword));
    //     return m;
    // }
}
