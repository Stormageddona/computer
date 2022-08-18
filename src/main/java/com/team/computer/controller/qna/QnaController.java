package com.team.computer.controller.qna;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/qna")
public class QnaController {
    @GetMapping("/list")
    public String getQnaList(){
        return "/qna/list";
    }
}
