$(function()
{
    $(".join_btn").click(function()
    {
        if (!confirm("가입 하시겠습니까?")) return ;
        
        let data = 
            {aci_id:$(".")}
        $.ajax
        ({
            url:"/api/account/join", 
        })
    })
})