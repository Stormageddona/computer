package com.team.computer.api.account;

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
import com.team.computer.mapper.AccountMapper;
import com.team.computer.util.AESAlgorithm;

@RestController
@RequestMapping("/api/account")
public class AccountAPIController {
    @Autowired AccountMapper a_mapper ;

    // 로그인
    @GetMapping("/login")
    public Map<String,Object> getLogin(@RequestParam @Nullable String id, @RequestParam @Nullable String pwd,HttpSession session) throws Exception
    {
        Map<String,Object> map =new LinkedHashMap<String,Object>() ;
        if (id == null || pwd == null) 
        {
            map.put("status",false) ;
            map.put("message","아이디와 비밀번호를 입력해주세요.") ;
            return map ;
        }
        pwd = AESAlgorithm.Encrypt(pwd) ;
        AccountInfoVO user = a_mapper.selectAccount(id, pwd) ;
        if (user == null)
        {
            map.put("status",false) ;
            map.put("message","아이디나 비밀번호가 맞지않습니다.") ;
            return map ;
        }
        map.put("status",true) ;
        map.put("message","로그인이 성공했습니다.") ;
        session.setAttribute("user", user);
        return map ;
    }
    

        // 회원가입
        @PutMapping("/join")
        public Map<String,Object> putUser(@RequestBody AccountInfoVO data) throws Exception
        {
            Map<String,Object> map =new LinkedHashMap<String,Object>() ;
            data.setAci_pwd(AESAlgorithm.Encrypt(data.getAci_pwd()));
            if (data.getAci_nickname() == null) data.setAci_nickname(data.getAci_name());
            a_mapper.insertAccountInfo(data);
            map.put("status",true) ;
            map.put("message","회원가입이 완료되었습니다.") ;
            return map ;
        }
}
