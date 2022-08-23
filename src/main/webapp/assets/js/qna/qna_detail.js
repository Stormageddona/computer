$(function(){
    $.ajax({
        url:"/api/qna/detail?seq="+seq,
        type:"get",
        success:function(result){
            $(".qna_head_area").html("");
            let headtag = 
                '<p>'+result.qnaDetail.qsi_title+'</p>'+
                '<div class="qna_head_user_info">'+'<p><span class="user_name">'+result.qnaDetail.aci_nickname+
                '</span> | <span>'+ makeDateString (new Date(result.qnaDetail.qsi_reg_dt))+'</span></p>'
                +'</div>'+'</div>'
            $(".qna_head_area").append(headtag);

            if(result.qnaDetail.aci_nickname == null || result.qnaDetail.aci_nickname == undefined) {
                $(".qna_head_user_info .user_name").html(result.qnaDetail.aci_id);
            }

            $(".qna_content_area").html("");
            let content = 
                '<p>'+result.qnaDetail.qsi_comment+'</p>'+'</div>'
            $(".qna_content_area").append(content)
        }
    })
    $(".btn_area .save").click(function(){

    })
})