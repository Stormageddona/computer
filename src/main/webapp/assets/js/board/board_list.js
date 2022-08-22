$("document").ready(function(){
    let query = window.location.search;
    let param = new URLSearchParams(query);
    let page = param.get('page');
    let keyword = param.get('keyword');

    if(keyword != null){
        selectBoardList(keyword, page);
    }else {
        selectBoardList(keyword, page);
        $("#search_form").on("submit", function(e){
            e.preventDefault(); 
            selectBoardList($("#keyword").val(), page);
        });
    }

})

function selectBoardList(keyword, page) {
    if(page == null || page == undefined) page = 1;
    if(keyword == null || keyword == undefined) keyword = "";
    $.ajax({
        url:"/api/board/list?page="+page+"&keyword="+keyword,
        type:"get",
        success:function(r) {
            console.log(r.boardList);
            $(".board_list_box table tbody").html("");
            for(let i=0; i < r.boardList.length; i++) {
                console.log("보드리스트 수 : "+(i+1))
                let release = new Date(r.boardList[i].bdi_mod_dt);
                let mod_date = release.getFullYear() + "-" + release.getMonth() + "-" + release.getDate();
                let release2 = new Date(r.boardList[i].bdi_reg_dt);
                let reg_date = release2.getFullYear() + "-" + release2.getMonth() + "-" + release2.getDate();
                let tag =
                    '<tr>'+
                        '<td>'+r.boardList[i].bdi_seq+'</td>'+
                        '<td><a href="/board/detail?seq='+r.boardList[i].bdi_seq+'">'+r.boardList[i].bdi_title+'('+r.boardList[i].comment_cnt+')</a></td>'+
                        '<td class="board_writer">'+r.boardList[i].aci_nickname+'</td>'+
                        // '<td>'+r.boardList[i].+'조회수</td>'+
                        '<td>(추가예정)</td>'+
                        '<td class="board_reg_dt">'+reg_date+'</td>'+
                    '</tr>';
                    $(".board_list_box table tbody").append(tag);
                    
                    if(r.boardList[i].aci_nickname == null) {
                        $(".board_writer").html(r.boardList[i].aci_id)
                    }
            }

            for(let i=0; i < r.boardCnt; i++) {
                let tag =
                '<a href="#" onclick="return false;">'+(i+1)+'</a>';
                $(".pager_area").html("");
                $(".pager_area").append(tag);
            }
        }
    })
}