package com.team.computer.api.board;

import java.util.LinkedHashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/board")
public class BoardAPIController {
    @GetMapping("/list")
    public Map<String, Object> getBoardList() {
        Map<String, Object> m = new LinkedHashMap<String, Object>();
        // m.put("s")
        return m;
    }
}
