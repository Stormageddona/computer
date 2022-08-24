$(function()
{


    $(".submit_id").click(function()
    {
        $.ajax
        ({
            url:"/api/account/find/id?name="+$(".find_id_input_name").val()+"&phone="+$(".find_id_input_phone").val(),
            type:"get",
            success:function(result)
            {
                if (result.status) 
                {
                    alert("아이디 찾기 성공. 고객님의 아이디는 "+result.id+" 입니다.")
                    location.href="/"
                }
                else alert(result.message)
            }
        })
    })
    
    $(".submit_pwd").click(function()
    {
        // console.log( $(".find_pwd_input_id").val())
        // console.log( $(".find_pwd_input_name").val())
        // console.log( $(".find_pwd_input_phone").val())
        $.ajax
        ({
            url:"/api/account/find/pwd?id="+$(".find_pwd_input_id").val()+"&name="+$(".find_pwd_input_name").val()+"&phone="+$(".find_pwd_input_phone").val(),
            type:"get",
            success:function(result)
            {

                if (result.status) location.href="/account/find/reset?hash="+result.seq ;
                else alert(result.message)
            }
        })
    })

    $(".cancel").click(function()
    {
        if (confirm("취소하시겠습니까?")) return location.href="/";
    })
})