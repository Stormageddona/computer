$(function()
{
    $.ajax({
        url:"/api/admin/account?grade=1",
        type:"get",
        success:function(result){
            console.log(result)
            $(".user_list").html("")
            for(let i=0; i<result.list.length; i++){
                let tag= 
                    '<tr>' +
                        '<td>' + result.list[i].aci_seq + '</td>' +
                        '<td>' + result.list[i].aci_name + '</td>' +
                        '<td>' + result.list[i].aci_phone + '</td>' +
                        '<td>' + result.list[i].aci_nickname + '</td>' +
                        '<td>' + result.list[i].aci_birth + '</td>' +
                    '</tr>';
                $(".user_list").append(tag)
            }
        }
    })
})