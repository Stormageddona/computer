$("document").ready(function(){
    let query = window.location.search;
    let param = new URLSearchParams(query);
    let page = param.get('page');
    let seq = param.get('seq');

    if(page == null || page == undefined) page = 1;
    selectBoardDetail(seq, page)

    $(".btn_area .save").click(function(){
        if(!confirm("등록하시겠습니까?")) return;

        if(user_seq == null || user_seq == undefined || user_seq == "") {
            alert("로그인시 등록가능")
            return;
        }

        data = {
            bcmi_aci_seq:user_seq,
            bcmi_bdi_seq:seq,
            bcmi_comment:$(".comment_summary textarea").val(),
            // bcmi_imgs:
        }
        putCommentAdd(data);
    })
})

function selectBoardDetail(seq, page) {
    $.ajax({
        url:"/api/board/detail?seq="+seq+"&page="+page,
        type:"get",
        success:function(r) {
            $(".board_head_area").html("");
            let boardHeadTag = 
            '<p>'+r.boardDetailInfo.bdi_title+'</p>'+
            '<div class="head_user_info">'+
                '<p><span class="user_name">'+r.boardDetailInfo.aci_nickname+'</span> | <span>'+r.boardDetailInfo.bdi_reg_dt+'</span></p>'+
            '</div>'+
            '<div class="board_info">'+
                '<p><span>조회수 100(추가예정)</span></p>'+
            '</div>'
            $(".board_head_area").append(boardHeadTag);

            if(r.boardDetailInfo.aci_nickname == null || r.boardDetailInfo.aci_nickname == undefined) {
                $(".head_user_info .user_name").html(r.boardDetailInfo.aci_id);
            }

            $(".board_content_area").html("");
            let board_summary =
                '<p>'+r.boardDetailInfo.bdi_comment+'</p>';
            $(".board_content_area").append(board_summary);

            $(".comment_box").html("");
            for(let i=0; i < r.boardDetailComment.length; i++) {
                let comment_info =
                '<div class="comment_area">'+
                    '<div class="comment_user">'+
                        '<p>'+r.boardDetailComment[i].aci_nickname+'</p>'+
                    '</div>'+
                    '<div class="comment_summary">'+
                        '<p>'+r.boardDetailComment[i].bcmi_comment+'</p>'+
                    '</div>'+
                    '<div class="comment_reg_dt">'+
                        '<p>'+r.boardDetailComment[i].bcmi_reg_dt+'</p>'+
                    '</div>'+
                '</div>';
                $(".comment_box").append(comment_info);
                if(r.boardDetailComment[i].aci_nickname == null || r.boardDetailComment[i].aci_nickname == undefined) {
                    $(".comment_user p").html(r.boardDetailComment[i].aci_id) 
                }
            }
            $(".comment_pager_area").html("");
            // console.log(r.boardDetailCommentCnt)
            for(let i =0; i < r.boardDetailCommentCnt; i++) {
                if(r.boardDetailComment.length < 10) {
                    $(".comment_pager_area").html("");
                }else{
                    let tag =
                    '<a href="#" onclick="return false;">'+(i+1)+'</a>';
                    $(".comment_pager_area").append(tag);
                }
            }

            // console.log(r.boardDetailComment)
        }
    })
}

function putCommentAdd(data) {
    $.ajax({
        url:"/api/board/comment_add",
        type:"put",
        contentType:"application/json",
        data:JSON.stringify(data),
        success:function(r) {
                alert(r.msg);
                location.reload();
        }
    })
}