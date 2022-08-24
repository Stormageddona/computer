package com.team.computer.controller.qna;

import org.springframework.lang.Nullable;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
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
    public String getQnaDetail(Model model,@RequestParam @Nullable Integer seq){
        model.addAttribute("seq", seq);
        return "/qna/qna_detail";
    }
    @GetMapping("/qna_form")
    public String addQna() {
        return "/qna/qna_form";
    }
}
