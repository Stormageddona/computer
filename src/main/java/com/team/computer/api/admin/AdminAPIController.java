package com.team.computer.api.admin;

import java.util.LinkedHashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.team.computer.mapper.AccountMapper;

@RestController
@RequestMapping("/api/admin")
public class AdminAPIController {
    @Autowired AccountMapper account_mapper;
    @GetMapping("/account")
    public Map<String,Object> getManageUser(
        @RequestParam @Nullable Integer page,
        @RequestParam @Nullable Integer offset,
        @RequestParam @Nullable String keyword,
        @RequestParam @Nullable String search_type
        ) {
        Map<String,Object> map = new LinkedHashMap<String,Object>();
        if(page == null) page =1;
        map.put("page", page);
        page = (page-1)*15;

        map.put("list", account_mapper.selectUserList(keyword, offset, search_type));
        map.put("pageCount", account_mapper.selectTotalPage(keyword,search_type));
        return map;
    }
}
