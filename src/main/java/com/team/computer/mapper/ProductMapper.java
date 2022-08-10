package com.team.computer.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.boot.autoconfigure.kafka.ConcurrentKafkaListenerContainerFactoryConfigurer;

import com.team.computer.data.CaseInfoVO;
import com.team.computer.data.CoolerInfoVO;
import com.team.computer.data.CpuInfoVO;
import com.team.computer.data.GpuInfoVO;
import com.team.computer.data.HddInfoVO;
import com.team.computer.data.MainboardInfoVO;
import com.team.computer.data.MemoryInfoVO;
import com.team.computer.data.PowerInfoVO;
import com.team.computer.data.SsdInfoVO;
import com.team.computer.data.request.ProductRequest;

@Mapper
public interface ProductMapper {
    public List<CaseInfoVO> selectCaseList(Integer offset, String keyword, Boolean desc);
    public Integer selectCaseListCnt(Integer offset, String keyword);

    public List<CoolerInfoVO> selectCoolerList(Integer offset, String keyword, Boolean desc);
    public Integer selectCoolerListCnt(Integer offset, String keyword);

    public List<CpuInfoVO> selectCpuList(Integer offset, String keyword, Boolean desc);
    public Integer selectCpuListCnt(Integer offset, String keyword);

    public List<GpuInfoVO> selectGpuList(Integer offset, String keyword, Boolean desc);
    public Integer selectGpuListCnt(Integer offset, String keyword);

    public List<HddInfoVO> selectHddList(Integer offset, String keyword, Boolean desc);
    public Integer selectHddListCnt(Integer offset, String keyword);
    
    public List<MainboardInfoVO> selectMainboardList(Integer offset, String keyword, Boolean desc);
    public Integer selectMainboardListCnt(Integer offset, String keyword);

    public List<MemoryInfoVO> selectMemoryList(Integer offset, String keyword, Boolean desc);
    public Integer selectMemoryListCnt(Integer offset, String keyword);

    public List<PowerInfoVO> selectPowerList(Integer offset, String keyword, Boolean desc);
    public Integer selectPowerListCnt(Integer offset, String keyword);

    public List<SsdInfoVO> selectSsdList(Integer offset, String keyword, Boolean desc);
    public Integer selectSsdListCnt(Integer offset, String keyword);

    // //테스트
    public void intsertTestCase(CaseInfoVO data) ;
}
