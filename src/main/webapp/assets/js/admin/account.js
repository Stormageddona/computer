$(function()
{
    $(".mod_box").hide()
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
                        '<td>' + result.list[i].aci_grade + '</td>' +
                        '<td><button class="modify_btn" data-seq='+i+'>수정</button></td>' +
                        '<td><button class="delete_btn" data-seq='+ result.list[i].aci_seq +'>삭제</button></td>' +
                    '</tr>';
                $(".user_list").append(tag)
            }
            $(".modify_btn").click(function(){
                $(".mod_box").show()
                let e = $(this).attr("data-seq")
                $(".mod_name").val(result.list[e].aci_name)
                $(".mod_phone").val(result.list[e].aci_phone)
                $(".mod_nickname").val(result.list[e].aci_nickname)
                $(".mod_birth").val(result.list[e].aci_birth)
                $(".mod_grade").val(result.list[e].aci_grade)
                $(".mod_submit").attr("data-seq",result.list[e].aci_seq)
        })
        $(".delete_btn").click(function(){
            if(!confirm("삭제하시겠습니까?/n ※ㅋ")) return;
            let del = $(this).attr("data-seq")
            $.ajax({
                url:"/api/admin/accountdelete?seq="+del,
                type:"delete",
                success:function(result){
                    alert(result.message)
                    location.reload()
                }
            })
        })
        }
    })
    $(".mod_cancel").click(function(){
        if(!confirm("취소하시겠습니까?/n ※ㅋ")) return;
        $(".mod_box").hide()
        $(".mod_name").val("")
        $(".mod_phone").val("")
        $(".mod_nickname").val("")
        $(".mod_birth").val("")
        $(".mod_grade").val("")
    })
    $(".mod_submit").click(function(){
        if(!confirm("수정하시겠습니까?/n ※ㅋ")) return;
        let data = 
        {
            aci_seq : $(this).attr("data-seq"),
            aci_name : $(".mod_name").val(),
            aci_phone : $(".mod_phone").val(),
            aci_nickname : $(".mod_nickname").val(),
            aci_birth : $(".mod_birth").val(),
            aci_grade : $(".mod_grade").val()
        }
        $.ajax({
            url:"/api/admin/account",
            type:"patch",
            contentType:"application/json",
            data:JSON.stringify(data),
            success:function(result){
                // console.log(result)
                alert(result.message)
                location.reload()
                $(".mod_box").hide()
            }
        })
    })
})