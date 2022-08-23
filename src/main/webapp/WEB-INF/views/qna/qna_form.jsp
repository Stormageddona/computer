<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/includes/header.jsp"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <main>
        <div class="qnaform_head_area">
            <p>문의 제목</p>
        </div>
        <div class="qnaform_user_info">
            <p><span>유저명</span> | <span>작성일</span></p>
        </div>
        <div class="qnaform_content_area">
            <p>내용</p>
            <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div class="btn_area"></div>
        <button class="submit_qna">등록</button>
        <button class="cancel_qna">취소</button>
    </main>
</body>
</html>