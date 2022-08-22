package com.team.computer.api.board;

import java.util.LinkedHashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.team.computer.data.BoardCommentInfoVO;
import com.team.computer.mapper.BoardMapper;

@RestController
@RequestMapping("/api/board")
public class BoardAPIController {
    @Autowired BoardMapper board_mapper;

    @GetMapping("/list")
    public Map<String, Object> getBoardList(@RequestParam @Nullable Integer page, @RequestParam @Nullable String keyword) {
        Map<String, Object> m = new LinkedHashMap<String, Object>();
        if(page==null) page=1;
        m.put("boardList", board_mapper.selectBoardList((page-1)*10, keyword));
        m.put("boardCnt", board_mapper.selectBoardListCnt((page-1)*10, keyword));
        return m;
    }

    @GetMapping("/detail")
    public Map<String, Object> getBoardDetail(@RequestParam Integer seq, @RequestParam @Nullable Integer page) {
        Map<String, Object> m = new LinkedHashMap<String, Object>();
        m.put("boardDetailInfo", board_mapper.selectBoardDetail(seq));
        m.put("boardDetailComment", board_mapper.selectBoardDetailComment(seq, (page-1)*10));
        m.put("boardDetailCommentCnt", board_mapper.selectBoardDetailCommentCnt((page-1)*10));
        return m;
    }

    @PutMapping("/comment_add")
    public Map<String, Object> putBoardComment(@RequestBody BoardCommentInfoVO data) {
        Map<String, Object> m = new LinkedHashMap<String, Object>();
        board_mapper.insertBoardDetailComment(data);
        m.put("status", true);
        m.put("msg", "등록되었습니다.");
        return m;
    }
}
