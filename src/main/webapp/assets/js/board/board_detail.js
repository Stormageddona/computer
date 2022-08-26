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
            let boardHeadTag = ""
            if(r.boardDetailInfo.bdi_aci_seq == user_seq) {
                boardHeadTag = 
                '<p>'+
                r.boardDetailInfo.bdi_title+
                '<button class="board_delete" data-seq="'+r.boardDetailInfo.bdi_seq+'">삭제</button>'+
                '<button class="board_mod" data-seq="'+r.boardDetailInfo.bdi_seq+'">수정</button>'+
                '</p>'+
                '<div class="head_user_info">'+
                    '<p><span class="user_name">'+r.boardDetailInfo.aci_nickname+'</span> | <span>'+r.boardDetailInfo.bdi_reg_dt+'</span></p>'+
                '</div>'+
                '<div class="board_info">'+
                    '<p><span>조회 수'+r.boardDetailInfo.boardCount+'</span></p>'+
                '</div>'
                $(".board_head_area").append(boardHeadTag);
            }else {
                boardHeadTag = 
                '<p>'+r.boardDetailInfo.bdi_title+'</p>'+
                '<div class="head_user_info">'+
                    '<p><span class="user_name">'+r.boardDetailInfo.aci_nickname+'</span> | <span>'+r.boardDetailInfo.bdi_reg_dt+'</span></p>'+
                '</div>'+
                '<div class="board_info">'+
                    '<p><span>조회 수 '+r.boardDetailInfo.boardCount+'</span></p>'+
                '</div>'
                $(".board_head_area").append(boardHeadTag);
            }

            if(r.boardDetailInfo.aci_nickname == null || r.boardDetailInfo.aci_nickname == undefined) {
                $(".head_user_info .user_name").html(r.boardDetailInfo.aci_id);
            }

            $(".board_mod").click(function(){
                location.href = "/board/form?seq="+r.boardDetailInfo.bdi_seq;
            })

            deleteBoardListMethod();

            // $(".board_head_area").

            $(".board_content_area").html("");
            let board_summary =
                r.boardDetailInfo.bdi_comment;
            $(".board_content_area").append(board_summary);

            $(".comment_box").html("");
            let comment_info = ""
            for(let i=0; i < r.boardDetailComment.length; i++) {
                if(r.boardDetailComment[i].bcmi_status == 2) {
                    if(r.boardDetailComment[i].aci_seq == user_seq) {
                    comment_info =
                        '<div class="comment_area">'+
                        '<div class="comment_user">'+
                            '<p>'+r.boardDetailComment[i].aci_nickname+'</p>'+
                        '</div>'+
                        '<div class="comment_summary">'+
                            '<p>블라인드 처리된 글입니다.</p>'+
                        '</div>'+
                        '<div class="comment_reg_dt">'+
                            '<p>'+r.boardDetailComment[i].bcmi_reg_dt+'</p>'+
                            '<button class="comment_delete" data-seq="'+r.boardDetailComment[i].bcmi_seq+'">삭제</button>'+
                        '</div>'+
                        '</div>';
                        $(".comment_box").append(comment_info);
                    } else {
                        comment_info =
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
                    }
                }else if (r.boardDetailComment[i].bcmi_status == 1){
                    if(r.boardDetailComment[i].aci_seq == user_seq) {
                        comment_info =
                        '<div class="comment_area">'+
                        '<div class="comment_user">'+
                            '<p>'+r.boardDetailComment[i].aci_nickname+'</p>'+
                        '</div>'+
                        '<div class="comment_summary">'+
                            '<p>'+r.boardDetailComment[i].bcmi_comment+'</p>'+
                        '</div>'+
                        '<div class="comment_reg_dt">'+
                            '<p>'+r.boardDetailComment[i].bcmi_reg_dt+'</p>'+
                            '<button class="comment_delete" data-seq="'+r.boardDetailComment[i].bcmi_seq+'">삭제</button>'+
                            '<button class="comment_mod">수정</button>'+
                        '</div>'+
                    '</div>';
                    $(".comment_box").append(comment_info);
                    } else {
    
                        comment_info =
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
                    }
                    if(r.boardDetailComment[i].aci_nickname == null || r.boardDetailComment[i].aci_nickname == undefined) {
                        $(".comment_user p").html(r.boardDetailComment[i].aci_id) 
                    }

                }
                // console.log(r.boardDetailComment[i]);
            }

            // updateComment();
            deleteCommentMethod();

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

function deleteBoardList(seq) {
    $.ajax({
        url:"/api/board/delete_board?bod_seq="+seq,
        type:"delete",
        success:function(r) {
            alert(r.msg);
            location.href="/board/list"
        }
    })
}

function deleteBoardListMethod() {
    $(".board_delete").click(function(){
        if(!confirm("삭제하시겠습니까?")) return;
        // alert($(this).attr("data-seq"))
        deleteBoardList($(this).attr("data-seq"))
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

function deleteComment(seq) {
    $.ajax({
        url:"/api/board/comment_remove?coment_seq="+seq,
        type:"delete",
        success:function(r) {
            alert(r.msg);
            location.reload();
        }
    })
}

function deleteCommentMethod() {
    $(".comment_delete").click(function(){
        if(!confirm("삭제하시겠습니까?")) return;
        // alert("안되지롱")
        deleteComment($(this).attr("data-seq"))
    })
}

function updateComment(data) {

    $.ajax({
        url:"/api/board/update_comment",
        type:"patch",
        contentType:"application/json",
        data:JSON.stringify(data),
        success:function(r) {
            alert(r.msg);
            location.reload();
        }
    })
}

// function updateCommentMethod() {
//     $(".comment_mod").click(function(){
//         let inputTag = 
//             '<input type="text" style="width: 100%;" value="test">';
//         $(this).parent().prev().html("");
//         $(this).parent().prev().append(inputTag);
//         $(this).parent().prev().$("input").val()
//     })
//     let data = {
//         bcmi_seq:,
//         bcmi_comment:,
//         bcmi_mod_dt:new Date()
//     }
//     updateComment(data)
// }