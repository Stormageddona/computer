package com.team.computer.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.team.computer.data.BoardCommentInfoVO;
import com.team.computer.data.BoardInfoVO;

@Mapper
public interface BoardMapper {
    public List<BoardInfoVO> selectBoardList(Integer offset, String keyword);
    public Integer selectBoardListCnt(Integer offset, String keyword);
    public BoardInfoVO selectBoardDetail(Integer seq);
    public List<BoardCommentInfoVO> selectBoardDetailComment(Integer seq, Integer offset);
    public Integer selectBoardDetailCommentCnt(Integer offset);
    public void insertBoardDetailComment(BoardCommentInfoVO data);
}
