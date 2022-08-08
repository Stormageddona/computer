$(function()
{
    $.ajax
    ({
        url:"/api/account/modify", type:"get",
        success:function(result)
        {
            console.log(result.message)
            if (result.user == null) return ;
            $(".input_id").val(result.user.aci_id).prop("disabled",true)
            $(".input_name").val(result.user.aci_name)
            $(".input_nickname").val(result.user.aci_nickname)
            $(".input_phone").val(result.user.aci_phone)
            $(".input_birth").val(makeDateString(new Date(result.user.aci_birth)))
            $(".modify_btn").attr("data-seq",result.user.aci_seq)
        }
    })

    $(".modify_btn").click(function()
    {
        if (!confirm("회원 정보를 수정하시겠습니까?")) return ;
        let data = 
        {
            aci_seq:$(this).attr("data-seq"),
            // aci_id:$(".input_id").val(),
            aci_pwd:$(".input_pwd").val()==""||$(".input_pwd").val()==null?null:$(".input_pwd").val(),
            aci_name:$(".input_name").val(),
            aci_nickname:$(".input_nickname").val(),
            aci_phone:$(".input_phone").val(),
            aci_birth:makeDateString(new Date($(".input_birth").val()))
        }
        $.ajax
        ({
            url:"/api/account/modify", type:"patch", data:JSON.stringify(data), contentType:"application/json", 
            success:function(result)
            {
                alert(result.message)
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