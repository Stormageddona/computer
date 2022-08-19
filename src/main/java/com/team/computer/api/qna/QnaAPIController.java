package com.team.computer.api.qna;

import java.util.LinkedHashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.team.computer.mapper.QnaMapper;

@RestController
@RequestMapping("/api/qna")
public class QnaAPIController {
    @Autowired QnaMapper qna_mapper;
    @GetMapping("/list")
    public Map<String,Object> getQnaList(@RequestParam @Nullable String keyword, @RequestParam @Nullable Integer page) {
        Map<String,Object> map = new LinkedHashMap<String,Object>();
        if(page == null) page =1;
        map.put("list", qna_mapper.selectQnaList(keyword, (page-1)*15));
        map.put("pageCount", qna_mapper.selectTotalPage(keyword));
        return map;
    }
}
