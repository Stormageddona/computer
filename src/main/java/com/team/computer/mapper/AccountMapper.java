package com.team.computer.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.team.computer.data.AccountInfoVO;

@Mapper
public interface AccountMapper {
    public AccountInfoVO selectAccount(String id, String pwd) ;
}
