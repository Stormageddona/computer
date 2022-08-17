package com.team.computer.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.team.computer.data.AccountInfoVO;


@Mapper
public interface AdminMapper {
    // 유저 리스트
    public List<AccountInfoVO> selectUserList(String keyword, Integer offset, String search_type, Integer grade);
    // 페이지 수
    public Integer selectTotalPage(String keyword, String search_type, Integer grade);
    // 계정 카운트
    public Integer selectTotalCount(String keyword, String search_type);
    // 계정 수정
    public void updateAccountInfo(AccountInfoVO data);
    // 계정 삭제
    public void deleteAccountInfo(Integer seq);
    // 관리자 추가
    public void insertAdminAccountInfo(AccountInfoVO data);

    // 제품 삭제
    public void deleteProductBySeq(String type,String typeseq , Integer seq) ;

}

