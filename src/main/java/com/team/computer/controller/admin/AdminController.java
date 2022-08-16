package com.team.computer.controller.admin;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.team.computer.mapper.AdminMapper;

@Controller
@RequestMapping("/admin")
public class AdminController {
    @Autowired AdminMapper admin_mapper;
    @GetMapping("/account")
    public String getManageUser(Model model, 
        @RequestParam @Nullable Integer page,
        // @RequestParam @Nullable Integer offset,
        @RequestParam @Nullable String keyword,
        // @RequestParam Integer grade,
        @RequestParam @Nullable String search_type
    ) {
        model.addAttribute("keyword", keyword);
        model.addAttribute("search_type", search_type);

        if(keyword == null) keyword="%%";
        else keyword = "%"+keyword+"%";
        if(page==null) page=1;

        model.addAttribute("page",page);
        page=(page-1)*15;

        // model.addAttribute("list", admin_mapper.selectUserList(keyword, offset, search_type, grade));
        // model.addAttribute("totalPage",admin_mapper.selectTotalPage(keyword, search_type, grade));
        // model.addAttribute("totalCount",admin_mapper.selectTotalCount(keyword, search_type));

        return "/admin/account";
    }
    @GetMapping("/adminList")
    public String getAdmin() {
        return "/admin/adminList";
    }
}
