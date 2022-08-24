$("document").ready(function(){

    editMethod();

    $("#btn_publish").click(function(){
        if(!(confirm("등록하시겠습니까?"))) return;

        if(user_seq == null || user_seq == undefined || user_seq == "") {
            alert("로그인후 사용가능합니다.")
            return;
        }
        let edit_txt = CKEDITOR.instances.ckedit.getData()
        alert(edit_txt);
        editTxtFile(edit_txt);

        console.log(editTxtFile(edit_txt));

        // insertBoardData(data);
    })
})

function editMethod() {
    CKEDITOR.replace(
        'ckedit' ,{
            height:500,
            filebrowserImageUploadUrl:'/api/ckedit/image/upload',
            filebrowserUploadUrl:'/Student/computer'
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

function editTxtFile(data) {
    $.ajax({
        url:"/text/upload",
        type:"put",
        contentType:"application/json",
        data:JSON.stringify(data),
        success:function(r) {
            console.log();

            let data = {
                bdi_aci_seq:user_seq,
                bdi_title:$(".board_title input").val(),
                bdi_comment:r.file
            }

            insertBoardData(data)
        }
    })

}

function insertBoardData(data) {
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