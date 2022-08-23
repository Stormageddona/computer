<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/includes/header.jsp"%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/assets/css/board_detail.css">
    <link rel="stylesheet" href="/assets/css/board_form.css">

    <script type="text/javascript" src="/assets/plugin/ckeditor/ckeditor.js"></script>

    <!-- <link href="http://netdna.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.css" rel="stylesheet">
    <link href="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.8/summernote.css" rel="stylesheet">
    <script src="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.8/summernote.js"></script>
    <script src="http://netdna.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.js"></script> 

    <script src="https://cdn.ckeditor.com/ckeditor5/29.1.0/classic/ckeditor.js"></script> -->
    <title>Document</title>
</head>
<body>
    <section class="board_detaile_section">
        <div class="board_detail_wrap">

            <textarea class="form-control" id="ekedit"></textarea>
            <button id="btn_publish">
                제출하기
            </button>
            <script type="text/javascript">
                CKEDITOR.replace(
                    'ekedit' ,{
                        height:500,
                        filebrowserImageUploadUrl:'/ckedit/upload',
                        filebrowserUploadUrl:"/Student/computer"
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

                $("#btn_publish").click(function(){
                    alert(CKEDITOR.instances.ekedit.getData());
                })
            </script>

            <!-- <script>
                $(document).ready(function() {
                    $('#summernote').summernote();
                });
            </script>

            <div id="summernote"></div>  -->


            <!-- <div id="classic">
            </div>
            <script>
                ClassicEditor
                    .create( document.querySelector( '#classic' ))
                    .catch( error => {
                        console.error( error );
                    } );
            </script> -->






            <!-- <div class="board_head_area">
                <input type="text">
                <div class="head_user_info">
                    <p><span>유저명</span> | <span>작성일</span></p>
                </div>
                <div class="board_info">
                    <p><span>조회수 100</span> | <span>추천 107</span> | <span>댓글 1</span></p>
                </div>
            </div>
            <div class="board_content_area">
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div class="btn_area">
                <button>등록하기</button>
            </div> -->
        </div>
    </section>
</body>
</html>