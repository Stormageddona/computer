package com.team.computer.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.team.computer.data.CaseInfoVO;

@Mapper
public interface ProductMapper {
    public List<CaseInfoVO> selectCaseListDesc(Integer offset, String keyword);
    public List<CaseInfoVO> selectCaseListAsc(Integer offset, String keyword);
    public Integer selectCaseListCnt(String keyword);
}
