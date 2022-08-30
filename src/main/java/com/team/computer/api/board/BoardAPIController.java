package com.team.computer.api.board;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;
import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.lang.Nullable;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.team.computer.data.AccountInfoVO;
import com.team.computer.data.BoardCommentInfoVO;
import com.team.computer.data.BoardInfoVO;
import com.team.computer.mapper.BoardMapper;
import com.team.computer.mapper.ImageMapper;

@RestController
@RequestMapping("/api/board")
public class BoardAPIController {
    @Autowired BoardMapper board_mapper;
    @Autowired ImageMapper img_mapper ;
    @GetMapping("/list")
    public Map<String, Object> getBoardList(@RequestParam @Nullable Integer page, @RequestParam @Nullable String keyword) {
        Map<String, Object> m = new LinkedHashMap<String, Object>();
        if(page==null) page=1;
        List<BoardInfoVO> list = board_mapper.selectBoardList((page-1)*10, keyword) ;
        for(BoardInfoVO i : list)
        {
            i.setBoardCount(board_mapper.selectLookupCountData(i.getBdi_seq()));
        }
        m.put("boardList", list);
        m.put("boardCnt", board_mapper.selectBoardListCnt((page-1)*10, keyword));
        return m;
    }

    @GetMapping("/detail")
    public Map<String, Object> getBoardDetail(HttpSession session ,@RequestParam Integer seq, @RequestParam @Nullable Integer page) throws Exception {
        Map<String, Object> m = new LinkedHashMap<String, Object>();
        AccountInfoVO user = (AccountInfoVO)session.getAttribute("user") ;
        BoardInfoVO data = board_mapper.selectBoardDetail(seq) ;
        // BufferedReader br = new BufferedReader(
        //     new FileReader(new File(path+"/text/"+data.getBdi_comment()) 
        // ))  ;
        // String s = "";
        // String content = "";
        // while(s != null) 
        // {
        //     content += s ;
        //     s = br.readLine();
        // }
        // data.setBdi_comment(content);
        // br.close();
        if (user != null  )
        {
            Boolean temp = board_mapper.isLookupCountTime(user.getAci_seq(), data.getBdi_seq()) ;
            if (temp == null) temp = true ;
            if (temp)
                board_mapper.insertLookupCountData(user.getAci_seq(), data.getBdi_seq()) ;
        }
        data.setBoardCount(board_mapper.selectLookupCountData(data.getBdi_seq()));
        m.put("boardDetailInfo", data) ;
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
    @DeleteMapping("/comment_remove")
    public Map<String, Object> deleteComment(@RequestParam Integer coment_seq) {
        Map<String, Object> m = new LinkedHashMap<String, Object>();
        board_mapper.deleteBoardDetailComment(coment_seq);
        m.put("status", true);
        m.put("msg", "삭제되었습니다");
        return m;
    }
    @Value("${spring.servlet.multipart.location}") String path;
    @PutMapping("/post")
    @Transactional
    public Map<String,Object> putPost(@RequestBody BoardInfoVO data,HttpSession session) throws Exception
    {
        Map<String,Object> map = new LinkedHashMap<String,Object>() ;
        AccountInfoVO user = (AccountInfoVO)session.getAttribute("user") ;
        BoardInfoVO bidata = new BoardInfoVO() ;
        bidata.setBdi_imgs("");
        String A = data.getBdi_comment() ;
        String[] split = A.split("src=\"");
        List<String> imglist = new LinkedList<String>() ;
        for (Integer i = 1 ; i < split.length; i++)
        {
            System.out.println(split[i].substring(7,33));
            imglist.add(split[i].substring(7,33)) ;
            data.setBdi_comment(data.getBdi_comment().replaceFirst(split[i].substring(7,33),"<img_tag_Temp>"));
            
        }
        if (imglist.size() > 0)
        {
            for (String i : imglist)
            {
                Map<String,Object> s = new LinkedHashMap<String,Object>() ;
                File from = new File(path+"/images/"+i) ;
                String After = i.replace("temp", "board") ;
                s.put("img",After);
                img_mapper.insertImage(s);
                bidata.setBdi_imgs(bidata.getBdi_imgs() + (bidata.getBdi_imgs()==""?"":",") + s.get("img_seq").toString());
                File target = new File(path+"/images/"+After) ;
                data.setBdi_comment(data.getBdi_comment().replaceFirst("<img_tag_Temp>",After));
                Files.move(from.toPath(),target.toPath(),StandardCopyOption.REPLACE_EXISTING) ;
            }
        }

        System.out.println(bidata.getBdi_comment());
        bidata.setBdi_aci_seq(user.getAci_seq());
        bidata.setBdi_title(data.getBdi_title());
        bidata.setBdi_comment(data.getBdi_comment());
        board_mapper.insertBoardData(bidata) ;
        map.put("status",true) ;
        map.put("message","게시글 등록이 완료되었습니다.") ;
        return map ;
    }
    @DeleteMapping("/delete_board")
    public Map<String, Object> deleteBoardList(@RequestParam Integer bod_seq) {
        Map<String, Object> m = new LinkedHashMap<String, Object>();
        board_mapper.deleteBoardList(bod_seq);
        m.put("status", true);
        m.put("msg", "삭제하시겠습니까?");
        return m;
    }
    @PatchMapping("/mod_board") 
    public Map<String, Object> updateBoardList(@RequestBody BoardInfoVO data) {
        Map<String, Object> m = new LinkedHashMap<String, Object>();
        board_mapper.updateBoard(data);
        m.put("status", true);
        m.put("msg", "수정되었습니다.");
        return m;
    }


    @PatchMapping("/update_comment")
    public Map<String, Object> updateBoardComment(@RequestBody BoardCommentInfoVO data) {
        Map<String, Object> m = new LinkedHashMap<String, Object>();
        board_mapper.updateBoardComment(data);
        m.put("status", true);
        m.put("msg", "수정되었습니다.");
        return m;
    }
}
