package com.team.computer.api.admin;

import java.util.LinkedHashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.team.computer.data.AccountInfoVO;
import com.team.computer.mapper.AccountMapper;
import com.team.computer.mapper.AdminMapper;
import com.team.computer.util.AESAlgorithm;


@RestController
@RequestMapping("/api/admin")
public class AdminAPIController {
    @Autowired AccountMapper account_mapper;
    @Autowired AdminMapper admin_mapper;
    @GetMapping("/account")
    public Map<String,Object> getUserList(
        @RequestParam @Nullable Integer offset,
        @RequestParam @Nullable String keyword,
        @RequestParam @Nullable String search_type,
        @RequestParam Integer grade
        ) {
        Map<String,Object> map = new LinkedHashMap<String,Object>();
        if (keyword.equals("undefined")) keyword = "";
        if (offset == null) offset = 1 ;
        map.put("list", admin_mapper.selectUserList(keyword, (offset-1)*15, search_type, grade));
        map.put("pageCount", admin_mapper.selectTotalPage(keyword,search_type,grade));
        return map;
    }
    
    @PatchMapping("/account")
    public Map<String,Object> PatchAccountInfo(@RequestBody AccountInfoVO data) {
        Map<String,Object> map = new LinkedHashMap<String,Object>();

        if(data.getAci_name() == null || data.getAci_name().equals("")) {
            map.put("status", false);
            map.put("mod_name_msg", "이름을 입력하지 않았음.");
            return map;
        }

        admin_mapper.updateAccountInfo(data);
        map.put("status", true);
        map.put("message", "회원정보 수정이 완료되었습니다.");
        return map;
    }
    @DeleteMapping("/accountdelete")
    public Map<String,Object> deleteAccountInfo(@RequestParam @Nullable Integer seq) {
        Map<String,Object> map = new LinkedHashMap<String,Object>();
        admin_mapper.deleteAccountInfo(seq);
        map.put("status", true);
        map.put("message", "회원정보 삭제가 완료되었습니다.");
        return map;
    }
    @PutMapping("/add_account")
    public Map<String,Object> putAddAccount(@RequestBody AccountInfoVO data) throws Exception{
        Map<String,Object> map = new LinkedHashMap<String,Object>();
        String pwd = data.getAci_pwd();
        pwd = AESAlgorithm.Encrypt(pwd);
        data.setAci_pwd(pwd);

        boolean isDuplicated = false;
        
        if(account_mapper.isDuplicatedId(data.getAci_id()) == true) {
            isDuplicated = true;
            map.put("status", false);
            map.put("id_message",data.getAci_id()+"(은)는 이미 사용중입니다.");
        }
        if(account_mapper.isDuplicatedPhone(data.getAci_phone()) == true) {
            isDuplicated = true;
            map.put("status", false);
            map.put("phone_message",data.getAci_phone()+"(은)는 이미 사용중입니다.");
        }
        
        if (isDuplicated) return map ;
        
        try{
            admin_mapper.insertAdminAccountInfo(data);
        }
        catch(DuplicateKeyException e) {
            map.put("status", false);
            map.put("message", data.getAci_id()+"(은)는 이미 등록된 아이디입니다.");
            return map;
        }
        map.put("status", true);
        map.put("message", "회원정보가 추가되었습니다.");
        System.out.println(data);
        return map;
    }
}
