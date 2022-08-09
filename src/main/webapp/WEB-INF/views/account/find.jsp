<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/includes/header.jsp"%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="/assets/js/account/find.js"></script>
</head>
<body>
    <c:if test="${type == 'id'}">
        <h1>아이디 찾기</h1>
        <span>이름</span><span><input type="text" class="find_id_input_name"></span><br>
        <span>전화번호</span><span><input type="text" placeholder="-은 빼고 입력해주세요." class="find_id_input_phone"></span><br>
        <button class="submit_id">아이디 찾기</button><button class="cancel">돌아가기</button>
    </c:if>
    <c:if test="${type == 'pwd'}">
        <h1>비밀번호 재설정</h1>
        <span>아이디</span><span><input type="text" class="find_pwd_input_id"></span><br>
        <span>이름</span><span><input type="text" class="find_pwd_input_name"></span><br>
        <span>전화번호</span><span><input type="text" placeholder="-은 빼고 입력해주세요." class="find_pwd_input_phone"></span><br>
        <button class="submit_pwd">비밀번호 재설정</button><button class="cancel">돌아가기</button>
    </c:if>
</body>
</html>