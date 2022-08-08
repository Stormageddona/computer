package com.team.computer.controller.admin;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.team.computer.mapper.AccountMapper;

@Controller
@RequestMapping("/admin")
public class AdminController {
    @Autowired AccountMapper account_mapper;
    @GetMapping("/user")
    public String getManageUser(Model model, 
        @RequestParam @Nullable Integer page,
        @RequestParam @Nullable String keyword,
        @RequestParam @Nullable String search_type
    ) {
        model.addAttribute("keyword", keyword);
        model.addAttribute("search_type", search_type);

        if(keyword == null) keyword="%%";
        else keyword = "%"+keyword+"%";
        if(page==null) page=1;

        model.addAttribute("page",page);
        page=(page-1)*15;

        // model.addAttribute("list", account_mapper.selectUserList(page, keyword, search_type));
        // model.addAttribute("totalPage",account_mapper.selectTotalPage(keyword, search_type));
        // model.addAttribute("totalCount",account_mapper.selectTotalCount(keyword, search_type));

        return "/manage/user";
    }
    @GetMapping("/account")
    public String getAdmin() {
        return "/admin/account";
    }
}
