$(function(){
    $.ajax({
        url:"/api/qna/detail?seq="+seq,
        type:"get",
        success:function(result){
            $(".qna_head_area").html("");
            let headtag = 
                '<p>'+result.qnaDetail.qsi_title+'</p>'+
                '<div class="qna_head_user_info">'+'<p><span class="user_name">'+result.qnaDetail.aci_nickname+'</span> | <span>'+result.qnaDetail.qsi_reg_dt+'</span></p>'
                +'</div>'
            $(".qna_head_area").append(headtag)
        }
    })
})