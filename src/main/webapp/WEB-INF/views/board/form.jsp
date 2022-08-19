<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/includes/header.jsp"%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/assets/css/board_detail.css">
    <title>Document</title>
</head>
<body>
    <section class="board_detaile_section">
        <div class="board_detail_wrap">
            <div class="board_head_area">
                <p>제목</p>
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
            </div>
        </div>
    </section>
</body>
</html>