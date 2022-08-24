package com.team.computer.api.qna;

import java.util.LinkedHashMap;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.team.computer.data.AccountInfoVO;
import com.team.computer.data.QuestionInfoVO;
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
    @GetMapping("/detail")
    public Map<String,Object> getQnaDetail(@RequestParam Integer seq) {
        Map<String,Object> map = new LinkedHashMap<String,Object>();
        map.put("qnaDetail", qna_mapper.selectQnaDetail(seq));
        return map;
    }

    @PutMapping("/qna_add")
    public Map<String,Object> addQna(@RequestBody QuestionInfoVO data, HttpSession session) {
        Map<String,Object> map = new LinkedHashMap<String,Object>();
        qna_mapper.insertQnaData(data);
        map.put("status", true);
        map.put("message", "등록되었습니다.");
        return map;
    }
}
