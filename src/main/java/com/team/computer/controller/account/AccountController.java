package com.team.computer.controller.account;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.team.computer.util.AESAlgorithm;

@Controller
@RequestMapping("/account")
public class AccountController {
    //로그인
    @GetMapping("/login")
    public String getAccountLogin()
    {
        return "/account/login" ;
    }
    //회원가입
    @GetMapping("/join")
    public String getAccountJoin()
    {
        return "/account/join" ;
    }
    //정보수정
    @GetMapping("/modify")
    public String getAccountModify()
    {
        return "/account/modify" ;
    }
    
    //아이디 비밀번호 찾기
    @GetMapping("/find/{type}")
    public String getFind(@PathVariable String type, Model model)
    {
        model.addAttribute("type", type) ;
        return "/account/find" ;
    }

    // 비밀번호 재설정
    @GetMapping("/find/reset")
    public String getPwdReset(@RequestParam String hash, Model model)
    {
        model.addAttribute("seq", hash) ;
        return "/account/pwdreset" ;
    }

    @GetMapping("/test")
    public String getTest123213() throws Exception {
        String encSeq = "5W1lkSvmI3LgzGXM+Q3Hdw==";
        // System.out.println(AESAlgorithm.Decrypt(encSeq));
        return "asdasd";
    }
}
