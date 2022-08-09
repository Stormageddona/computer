package com.team.computer.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.team.computer.data.CaseInfoVO;
import com.team.computer.data.CoolerInfoVO;
import com.team.computer.data.CpuInfoVO;
import com.team.computer.data.GpuInfoVO;

@Mapper
public interface ProductMapper {
    public List<CaseInfoVO> selectCaseListDesc(Integer offset, String keyword);
    public List<CaseInfoVO> selectCaseListAsc(Integer offset, String keyword);
    public Integer selectCaseListCnt(String keyword);

    public List<CoolerInfoVO> selectCoolerListDesc(Integer offset, String keyword);
    public List<CoolerInfoVO> selectCoolerListAsc(Integer offset, String keyword);
    public Integer selectCoolerListCnt(String keyword);

    public List<CpuInfoVO> selectCpuListDesc(Integer offset, String keyword);
    public List<CpuInfoVO> selectCpuListAsc(Integer offset, String keyword);
    public Integer selectCpuListCnt(String keyword);

    public List<GpuInfoVO> selectGpuListDesc(Integer offset, String keyword);
    public List<GpuInfoVO> selectGpuListAsc(Integer offset, String keyword);
    public Integer selectGpuListCnt(String keyword);
}
