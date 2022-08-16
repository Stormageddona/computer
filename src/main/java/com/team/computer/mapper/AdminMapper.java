package com.team.computer.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.team.computer.data.AccountInfoVO;


@Mapper
public interface AdminMapper {
    
    public List<AccountInfoVO> selectUserList(String keyword, Integer offset, String search_type, Integer grade);
    public Integer selectTotalPage(String keyword, String search_type, Integer grade);
    public Integer selectTotalCount(String keyword, String search_type);
    public void updateAccountInfo(AccountInfoVO data);
    public void deleteAccountInfo(Integer seq);

    // 제품 삭제
    public void deleteProductBySeq(String type,String typeseq , Integer seq) ;

}

