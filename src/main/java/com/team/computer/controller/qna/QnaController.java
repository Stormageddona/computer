package com.team.computer.controller.qna;

import org.springframework.lang.Nullable;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/qna")
public class QnaController {
    @GetMapping("/list")
    public String getQnaList(){
        return "/qna/list";
    }
    @GetMapping("/detail")
    public String getQnaDetail(@RequestParam @Nullable Integer seq){
        return "/qna/detail";
    }
}
