$(function(){
    let query = window.location.search;
    let param = new URLSearchParams(query);
    let seq = param.get('seq');
    let asi_seq = param.get('asi_seq');
    if(seq == null || seq == undefined) seq = "";
    if(asi_seq == null || asi_seq == undefined) asi_seq = "";
    selectQnaDetail(seq, asi_seq)
    $(".btn_area .save").click(function(){

    })
})

function selectQnaDetail(seq, asi_seq) {
    $.ajax({
        url:"/api/qna/detail?seq="+seq+"&asi_seq="+asi_seq,
        type:"get",
        success:function(result){
            $(".qna_head_area").html("");
            let headtag = ""
            if(seq == null || seq == undefined || seq == "") {
                headtag = 
                    '<p>'+result.answerDetail.asi_title+'</p>'+
                    '<div class="qna_head_user_info">'+'<p><span class="user_name">'+result.answerDetail.aci_nickname+
                    '</span> | <span>'+ makeDateString (new Date(result.answerDetail.asi_reg_dt))+'</span></p>'
                    +'</div>'+'</div>'
                $(".qna_head_area").append(headtag);
            } else {
                headtag = 
                '<p>'+result.qnaDetail.qsi_title+'</p>'+
                '<div class="qna_head_user_info">'+'<p><span class="user_name">'+result.qnaDetail.aci_nickname+
                '</span> | <span>'+ makeDateString (new Date(result.qnaDetail.qsi_reg_dt))+'</span></p>'
                +'</div>'
            $(".qna_head_area").append(headtag);
            }

            if(result.qnaDetail.aci_nickname == null || result.qnaDetail.aci_nickname == undefined) {
                $(".qna_head_user_info .user_name").html(result.qnaDetail.aci_id);
            }

            $(".qna_content_area").html("");
            let content = 
                '<p>'+result.qnaDetail.qsi_comment+'</p>'+'</div>'
            $(".qna_content_area").append(content)

            $(".qna_answer_area").html("");
            let a_content = 
                '<p>'+result.qnaDetail.asi_comment+'</p>'+'</div>'
            $(".qna_answer_area").append(a_content)
            // $(".answer_btn").attr("onclick", "location.href='/qna/form?seq="+seq+"'")

            $(".answer_btn").click(function(){
                if(user_seq == null || user_seq == undefined || user_seq == "") {
                    alert("로그인후 사용가능합니다.")
                    return;
                }
                location.href='/qna/form?seq='+seq;
            })
        }
    })
}