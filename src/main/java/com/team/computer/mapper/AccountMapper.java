package com.team.computer.mapper;


import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.team.computer.data.AccountInfoVO;
import com.team.computer.data.request.CartRequest;

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
    

    //아이디, 비밀번호 찾기 
    public String selectFindId(String name, String phone) ;
    public String selectFindPwd(String id,String name, String phone) ;
    public void updateAccountInfoPwd(Integer seq, String pwd) ;

    // 카트
    public void insertCartData(Integer account_seq, String table, Integer product_seq, Integer product_count) ;
    public List<CartRequest> selectCartInfoBySeq(Integer seq) ;
    public CartRequest selectCartDetailBySeq(String table, String type, Integer seq) ;
    public void deleteCartInfoByAccountSeq(Integer seq) ;
}
