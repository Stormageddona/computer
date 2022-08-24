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
    <script src="/assets/js/board/board_edit.js"></script>

    <!-- <link href="http://netdna.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.css" rel="stylesheet">
    <link href="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.8/summernote.css" rel="stylesheet">
    <script src="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.8/summernote.js"></script>
    <script src="http://netdna.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.js"></script> 

    <script src="https://cdn.ckeditor.com/ckeditor5/29.1.0/classic/ckeditor.js"></script> -->
    <title>Document</title>
    <!-- <script type="text/javascript">window.parent.CKEDITOR.tools.callFunction(callback, 'imgUrl', 'image upload success!!')</script> -->
</head>
<body>
    <section class="board_detaile_section">
        <div class="board_detail_wrap">
            <div class="board_title">
                <p>제목</p>
                <input type="text">
            </div>
            <textarea class="form-control" id="ckedit"></textarea>
            <button id="btn_publish">
                제출하기
            </button>
            <div class="test_div">
            </div>






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