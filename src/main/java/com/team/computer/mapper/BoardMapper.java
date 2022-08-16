package com.team.computer.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.team.computer.data.BoardInfoVO;

@Mapper
public interface BoardMapper {
    public List<BoardInfoVO> selectBoardList(Integer offset, String keyword);
    public Integer selectBoardListCnt(Integer offset, String keyword);
}
