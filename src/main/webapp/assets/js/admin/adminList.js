let startPage=0;
$(function()
{
    $(".mod_box").hide()
    $(".add_box").hide()
    
    getList()
    $(".mod_cancel").click(function(){
        if(!confirm("취소하시겠습니까?/n ※ㅋ")) return;
        $(".mod_box").hide()
        $(".mod_name").val("")
        $(".mod_phone").val("")
        $(".mod_nickname").val("")
        $(".mod_birth").val("")
        $(".mod_status").val("")
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
            aci_status : $(".mod_status").val()
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
    $(".add_account").click(function(){
        $(".add_box").show()
    });

    $(".add_cancel").click(function(){
        if(!confirm("취소하시겠습니까?/n ※ㅋ")) return;
        $(".add_box").hide()
        $(".add_id").val("")
        $(".add_pwd").val("")
        $(".add_name").val("")
        $(".add_phone").val("")
        $(".add_nickname").val("")
        $(".add_birth").val("")
        $(".add_grade").val("")
    });
    
    $(".add_submit").click(function(){
        if(!confirm ("등록하시겠습니까?")) return;
        let data = {
            aci_id : $(".add_id").val(),
            aci_pwd : $(".add_pwd").val(),
            aci_name : $(".add_name").val(),
            aci_phone : $(".add_phone").val(),
            aci_nickname : $(".add_nickname").val(),
            aci_birth : $(".add_birth").val(),
            aci_grade : $(".add_grade option:selected").val()
        }        
        $.ajax({
            url:"/api/admin/add_account",
            type:"put",
            contentType:"application/json",
            data:JSON.stringify(data),
            success:function(result) {
                if(result.message != null){
                    alert(result.message)
                }
                if(result.id_message != null){
                    alert(result.id_message)
                }
                if(result.phone_message != null) {
                    alert(result.phone_message)
                }
                if(result.status){
                    location.reload();
                    $(".add_box").hide();
                }
            }
        })
    })
    $(".input_reset").click(function(){
        $(".search_box input").val("");
        location.reload();
    })

    $(".submit_account").click(function()
    {
        getList($(".keyword").val())
        // console.log($(".keyword").val())
        
    })
    
})

function getList(keyword, page)
{
    if(page == null || page == undefined) page = 1;
    if(keyword == null || keyword == undefined) keyword = "";
    $.ajax({
        url:"/api/admin/account?grade=2&keyword="+keyword+"&offset="+page+"&search_type=id",
        type:"get",
        success:function(result){
            // console.log(result)
            $(".admin_list").html("")
            for(let i=0; i<result.list.length; i++){
                let str = null ;
                if(result.list[i].aci_status == 1) {
                    str = "정상"
                }
                else if (result.list[i].aci_status == 2) {
                    str = "정지"
                }
                else if (result.list[i].aci_status == 3) {
                    str = "탈퇴예정"
                }
                else if (result.list[i].aci_status == 4) {
                    str = "탈퇴"
                }
                let tag= 
                    '<tr>' +
                        '<td>' + result.list[i].aci_seq + '</td>' +
                        '<td>' + result.list[i].aci_id + '</td>' +
                        '<td>' + result.list[i].aci_name + '</td>' +
                        '<td>' + result.list[i].aci_phone + '</td>' +
                        '<td>' + result.list[i].aci_nickname + '</td>' +
                        '<td>' + makeDateString(new Date(result.list[i].aci_birth)) + '</td>' +
                        '<td>' + makeDateString(new Date(result.list[i].aci_reg_dt)) + '</td>' +
                        '<td>' + str + '</td>' +
                        '<td><button class="modify_btn" data-seq='+i+'>수정</button></td>' +
                        '<td><button class="delete_btn" data-seq='+ result.list[i].aci_seq +'>삭제</button></td>' +
                    '</tr>';
                $(".admin_list").append(tag)
            }
            $(".page_area").html("");
            for(let i=startPage; i<(result.pageCount>(startPage+10)?(startPage+10):result.pageCount); i++) {
                

                if(startPage > 10) {
                    $(".page_area").append("<button class='prev_page'>이전페이지</button>")
                }
                $(".page_area").append("<button>"+(i+1)+"</button>")
                $(".page_area button").click(function(){
                    let page = $(this).html();
                    getList(keyword, page);
                    // console.log(page);
                })
                if(result.pageCount==(startPage+10)){
                    $(".page_area").append("<button class='next_page'>다음페이지</button>")
                }
            }
            $(".prev_page").click(function(){
                startPage = startPage-10
            })
            $(".next_page").click(function(){
                startPage = startPage+10
            })
            $(".modify_btn").click(function(){
                $(".mod_box").show()
                let e = $(this).attr("data-seq")
                $(".mod_name").val(result.list[e].aci_name)
                $(".mod_phone").val(result.list[e].aci_phone)
                $(".mod_nickname").val(result.list[e].aci_nickname)
                $(".mod_birth").val(makeDateString(new Date(result.list[e].aci_birth)))
                $(".mod_status").val(result.list[e].aci_status)
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
}