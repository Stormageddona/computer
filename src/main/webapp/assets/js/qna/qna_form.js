$(function(){
    $(".btn_area .submit").click(function(){
        if(!confirm ("등록하시겠습니까?")) return;
        if(user_seq == null || user_seq == undefined || user_seq == ""){
            alert("로그인 후 등록가능")
            return;
        }

        let data = {
            qsi_aci_seq : user_seq,
            qsi_title : $(".q_title").val(),
            aci_name : $(".user_name").val(),
            qsi_comment : $(".q_content").val()
        }
    $.ajax({
        url:"/api/qna/qna_add",
        type:"put",
        contentType:"application/json",
        data:JSON.stringify(data),
        success:function(result){
            // console.log(result)
        }
    })
    })
    $(".btn_area .save").click(function(){

    })
})