package com.team.computer.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.team.computer.data.AccountInfoVO;
import com.team.computer.data.CaseInfoVO;
import com.team.computer.data.CoolerInfoVO;
import com.team.computer.data.CpuInfoVO;
import com.team.computer.data.GpuInfoVO;
import com.team.computer.data.HddInfoVO;
import com.team.computer.data.MainboardInfoVO;
import com.team.computer.data.MemoryInfoVO;
import com.team.computer.data.PowerInfoVO;
import com.team.computer.data.SsdInfoVO;

@Mapper
public interface AdminMapper {
    public List<AccountInfoVO> selectUserList(String keyword, Integer offset, String search_type, Integer grade);
    public Integer selectTotalPage(String keyword, String search_type, Integer grade);
    public Integer selectTotalCount(String keyword, String search_type);
    public void updateAccountInfo(AccountInfoVO data);
    public void deleteAccountInfo(Integer seq);

    // 제품 조회
    public List<CpuInfoVO> selectCpuList() ;
    public List<MainboardInfoVO> selectMainboardList() ;
    public List<CoolerInfoVO> selectCoolerList() ;
    public List<GpuInfoVO> selectGPUList() ;
    public List<MemoryInfoVO> selectMemoryList() ;
    public List<PowerInfoVO> selectPowerList() ;
    public List<CaseInfoVO> selectCaseList() ;
    public List<HddInfoVO> selectHddList() ;
    public List<SsdInfoVO> selectSsdList() ;
}

