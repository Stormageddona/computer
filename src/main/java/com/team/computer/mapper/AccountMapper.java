package com.team.computer.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.team.computer.data.AccountInfoVO;

@Mapper
public interface AccountMapper {
    // 로그인
    public AccountInfoVO selectAccount(String id, String pwd) ;
    public void insertAccountInfo(AccountInfoVO data) ;
    // 회원 정보 수정
    public void updateAccountInfo(AccountInfoVO data) ;

    //중복 체크
    public Boolean isDuplicatedId(String id);
    public Boolean isDuplicatedPhone(String phone);
    
}
