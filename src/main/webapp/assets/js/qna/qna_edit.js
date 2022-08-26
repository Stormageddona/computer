$("document").ready(function(){

    let query = window.location.search;
    let param = new URLSearchParams(query);
    let seq = param.get('seq');

    editMethod();

    console.log();

    $("#btn_publish").click(function(){
        if(!(confirm("등록하시겠습니까?"))) return;

        if(user_seq == null || user_seq == undefined || user_seq == "") {
            alert("로그인후 사용가능합니다.")
            return;
        }
        let edit_txt = CKEDITOR.instances.ckedit.getData()
        alert(seq);
        editTxtFile(edit_txt, seq);
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

function editTxtFile(data, seq) {
    // $.ajax({
    //     url:"/text/upload",
    //     type:"put",
    //     contentType:"application/json",
    //     data:JSON.stringify(data),
    //     success:function(r) {
            console.log();

            // let data = {
            //     qsi_aci_seq:user_seq,
            //     qsi_title:$(".board_title input").val(),
            //     qsi_comment:r.file
            // }
            if (seq == null || seq == "" || seq == undefined) {
                let dataa = {
                    qsi_aci_seq:user_seq,
                    qsi_title:$(".board_title input").val(),
                    qsi_comment:data
                }
    
                insertQnaData(dataa)
            } else {
                let dataa = {
                    asi_aci_seq:user_seq,
                    asi_qsi_seq:seq,
                    asi_title:$(".board_title input").val(),
                    asi_comment:data
                }
                insertAnserData(dataa);
            }

        // }
    // })

}

function insertQnaData(data) {
    $.ajax({
        url:"/api/qna/qna_form",
        type:"put",
        contentType:"application/json",
        data:JSON.stringify(data),
        success:function(r) {
            alert(r.message);
        }
    })
}

function insertAnserData(data) {
    $.ajax({
        url:"/api/qna/answer_form",
        type:"put",
        contentType:"application/json",
        data:JSON.stringify(data),
        success:function(r) {
            alert(r.message);
        }
    })
}