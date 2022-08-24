$(function(){
    let data = {
        qsi_title : $(".q_title").val(),
        aci_name : $(".user_name").val(),
        qsi_comment : $(".q_content").val()
    }
    $.ajax({
        url:"/api/qna/qna_form",
        type:"put",
        contentType:"application/json",
        data:JSON.stringify(data),
        success:function(result){
            // console.log(result)
        }
    })
    $(".btn_area .save").click(function(){

    })
})