package com.team.computer.api.admin;

import java.util.LinkedHashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.team.computer.data.AccountInfoVO;
import com.team.computer.mapper.AccountMapper;
import com.team.computer.mapper.AdminMapper;

@RestController
@RequestMapping("/api/admin")
public class AdminAPIController {
    @Autowired AccountMapper account_mapper;
    @Autowired AdminMapper admin_mapper;
    @GetMapping("/account")
    public Map<String,Object> getUserList(
        @RequestParam @Nullable Integer page,
        @RequestParam @Nullable Integer offset,
        @RequestParam @Nullable String keyword,
        @RequestParam @Nullable String search_type,
        @RequestParam Integer grade
        ) {
        Map<String,Object> map = new LinkedHashMap<String,Object>();
        if(page == null) page =1;
        map.put("page", page);
        page = (page-1)*15;
        if (offset == null) offset = 0 ;

        map.put("list", admin_mapper.selectUserList(keyword, offset, search_type, grade));
        map.put("pageCount", admin_mapper.selectTotalPage(keyword,search_type,grade));
        return map;
    }
    
    @PatchMapping("/account")
    public Map<String,Object> PatchAccountInfo(
        @RequestBody AccountInfoVO data
    ){
        Map<String,Object> map = new LinkedHashMap<String,Object>();
        admin_mapper.updateAccountInfo(data);
        map.put("status", true);
        map.put("message", "회원정보 수정이 완료되었습니다.");
        return map;
    }
}
