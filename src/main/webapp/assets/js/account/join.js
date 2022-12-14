$(function()
{
    $(".join_btn").click(function()
    {
        if (!confirm("가입 하시겠습니까?")) return ;
        let data = 
            {
                aci_id:$(".join_id").val(),
                aci_pwd:$(".join_pwd").val(),
                aci_name:$(".join_name").val(),
                aci_nickname:$(".join_nickname").val(),
                aci_phone:$(".join_phone").val(),
                aci_birth:makeDateString(new Date($(".join_birth").val()))
            }
        // console.log(data)
        $.ajax
        ({
            url:"/api/account/join",type:"put", data:JSON.stringify(data), contentType:"application/json",
            success:function(result)
            {
                alert(result.message) ;
            }
        })
    })
    $(".join_id, .join_phone, .input_phone").change(function()
    {
        type = $(this).attr("data-type")
        $.ajax
        ({
            url:"/api/account/join?value="+$(this).val()+"&type="+type,
            type:"get",
            success:function(result)
            {
                $(".err_msg_"+type).html(result.message) ;
            }
        })
    })
})