<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/includes/header.jsp"%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="/assets/js/account/modify.js"></script>
</head>
<body>
    <input type="text" class="input_id">
    <input type="password" class="input_pwd" placeholder="비밀번호">
    <input type="text" class="input_name" placeholder="이름">
    <input type="text" class="input_nickname" placeholder="닉네임">
    <input type="text" class="input_phone" data-type="phone" placeholder="휴대폰">
    <b class="err_msg_phone"></b>
    <input type="text" class="input_birth" placeholder="생일">
    <button class="modify_btn">수정</button>
    <button class="cancel_btn">취소</button>
</body>
</html>