$("document").ready(function(){

    let query = window.location.search;
    let param = new URLSearchParams(query);
    let page = param.get('page');
    let seq = param.get('seq');
    if(page == null || page == undefined) page = 1;

    editMethod();
    testdetail(seq, page);

    // testdetail(13, page);

    $("#btn_publish").click(function(){
        // if(!(confirm("등록하시겠습니까?"))) return;

        // if(user_seq == null || user_seq == undefined || user_seq == "") {
        //     alert("로그인후 사용가능합니다.")
        //     return;
        // }
        let edit_txt = CKEDITOR.instances.ckedit.getData().replace("\\n", "")

        if(seq == null || seq == "" || seq == undefined){
            if(!(confirm("등록하시겠습니까?"))) return;
            insertBoardData(edit_txt);
        } else {
            if(!(confirm("수정하시겠습니까?"))) return;

            updateBoard(seq, edit_txt);
        }


        // editTxtFile(edit_txt);

        // console.log(editTxtFile(edit_txt));

        // insertBoardData(data);
    })

})


function editMethod() {
    CKEDITOR.replace(
        'ckedit' ,{
            height:500,
            filebrowserImageUploadUrl:'/image/upload',
            // filebrowserUploadUrl:"/Student/computer"
        }
        );

    CKEDITOR.on('dialogDefinnition', function(e){
        var dialogName = e.data.name;
        var dialogDefinnition = e.data.definition;

        switch(dialogName) {
            case 'image':
                // dialogDefinnition.removeContents('info');
                dialogDefinnition.removeContents('Link');
                dialogDefinnition.removeContents('advanced');
            break;
        }
    })
}

// function editTxtFile(data) {
//     $.ajax({
//         url:"/text/upload",
//         type:"put",
//         contentType:"application/json",
//         data:JSON.stringify(data),
//         success:function(r) {
//             console.log();
            
//             let data = {
//                 bdi_aci_seq:user_seq,
//                 bdi_title:$(".board_title input").val(),
//                 bdi_comment:r.file
//             }

//             insertBoardData(data)
//         }
//     })

// }

function insertBoardData(board_text) {
    let data = {
        bdi_aci_seq:user_seq,
        bdi_title:$(".board_title input").val(),
        bdi_comment:board_text
    }

    $.ajax({
        url:"/api/board/post",
        type:"put",
        contentType:"application/json",
        data:JSON.stringify(data),
        success:function(r) {
            alert(r.message);


        }
    })
}

function updateBoard(seq, board_text) {
    data = {
        bdi_seq:seq,
        bdi_title:$(".board_title input").val(),
        bdi_comment:board_text
    }
    $.ajax({
        url:"/api/board/mod_board",
        type:"patch",
        contentType:"application/json",
        data:JSON.stringify(data),
        success:function(r) {
            alert(r.msg);
            location.href="/board/detail?seq="+seq;
        }
    })
}

function testdetail(seq, page) {
    $.ajax({
        url:"/api/board/detail?seq="+seq+"&page="+page,
        type:"get",
        success:function(r) {

            $(".board_title input").val(r.boardDetailInfo.bdi_title)

            $("#ckedit").html("")
            
            console.log(r.boardDetailInfo.bdi_comment)
            let board_summary =
                r.boardDetailInfo.bdi_comment;
            $("#ckedit").html(board_summary)
        }
    })
}