package com.team.computer.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.team.computer.data.AnswerInfoVO;
import com.team.computer.data.QuestionInfoVO;

@Mapper
public interface QnaMapper {
    public List<QuestionInfoVO> selectQnaList(String keyword,Integer offset);
    public Integer selectTotalPage(String keyword);
    public QuestionInfoVO selectQnaDetail(Integer seq);
    public AnswerInfoVO selectAnswerDetail(Integer asi_seq);
    public void insertQnaData(QuestionInfoVO data);
    public void insertAnswerData(AnswerInfoVO data);
}
