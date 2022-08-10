package com.team.computer.data.request;

import java.util.List;

import com.team.computer.data.CaseInfoVO;
import com.team.computer.data.CoolerInfoVO;
import com.team.computer.data.CpuInfoVO;
import com.team.computer.data.GpuInfoVO;
import com.team.computer.data.HddInfoVO;
import com.team.computer.data.MainboardInfoVO;
import com.team.computer.data.MemoryInfoVO;
import com.team.computer.data.PowerInfoVO;
import com.team.computer.data.SsdInfoVO;

import lombok.Data;

@Data
public class ProductRequest {
    private List<CaseInfoVO> case_info;
    private List<CoolerInfoVO> cooler_Info;
    private List<CpuInfoVO> cpu_info;
    private List<GpuInfoVO> gpu_info;
    private List<HddInfoVO> hdd_info;
    private List<MainboardInfoVO> mainboard_info;
    private List<MemoryInfoVO> memory_info;
    private List<PowerInfoVO> power_info;
    private List<SsdInfoVO> ssd_info;
}
