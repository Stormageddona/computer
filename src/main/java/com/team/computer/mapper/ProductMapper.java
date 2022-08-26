package com.team.computer.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import com.team.computer.data.CaseInfoVO;


@Mapper
public interface ProductMapper {

    
    public List<Map<String,Object>> selectList(
        Integer offset, String keyword, Boolean desc,String type, String search,String ordertype) ;
    public Integer selectListCnt(String keyword,String type, String search,String ordertype);
    public Map<String,Object> selectProductDetailBySeq(String table, String type, Integer seq) ;
    public List<String> selectProductColumn(String table) ;
    public List<String> selectProductColumnComment(String table) ;


    // 제품 삭제
    public void deleteProductBySeq(String type,String typeseq , Integer seq) ;
    // 제품 추가
    public void insertProduct(String type,Map<String,Object> data) ;
    // 제품 수정
    public void updateProduct(String type,String prefix,Map<String,Object> data) ;

    // public List<Map<String,Object>> selectCaseList(Integer offset, String keyword, Boolean desc);

    // public List<CoolerInfoVO> selectCoolerList(Integer offset, String keyword, Boolean desc);
    // public Integer selectCoolerListCnt(Integer offset, String keyword);

    // public List<CpuInfoVO> selectCpuList(Integer offset, String keyword, Boolean desc);
    // public Integer selectCpuListCnt(Integer offset, String keyword);

    // public List<GpuInfoVO> selectGpuList(Integer offset, String keyword, Boolean desc);
    // public Integer selectGpuListCnt(Integer offset, String keyword);

    // public List<HddInfoVO> selectHddList(Integer offset, String keyword, Boolean desc);
    // public Integer selectHddListCnt(Integer offset, String keyword);
    
    // public List<MainboardInfoVO> selectMainboardList(Integer offset, String keyword, Boolean desc);
    // public Integer selectMainboardListCnt(Integer offset, String keyword);

    // public List<MemoryInfoVO> selectMemoryList(Integer offset, String keyword, Boolean desc);
    // public Integer selectMemoryListCnt(Integer offset, String keyword);

    // public List<PowerInfoVO> selectPowerList(Integer offset, String keyword, Boolean desc);
    // public Integer selectPowerListCnt(Integer offset, String keyword);

    // public List<SsdInfoVO> selectSsdList(Integer offset, String keyword, Boolean desc);
    // public Integer selectSsdListCnt(Integer offset, String keyword);

    // //테스트
    public void intsertTestCase(CaseInfoVO data) ;
}
