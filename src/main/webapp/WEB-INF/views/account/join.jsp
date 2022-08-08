<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/includes/header.jsp"%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="/assets/js/account/join.js"></script>
    <link rel="stylesheet" href="/assets/css/join.css">

</head>
<body>
    
<section class="join_section">
    <div class="join_wrap">
        <h3>회원가입</h3>
        <table class="join_box">
            <tr>
                <th>
                    아이디
                </th>
                <td>
                    <input type="text" class="join_id" placeholder="아이디">
                </td>
            </tr>
            <tr>
                <th>
                    비밀번호
                </th>
                <td>
                    <input type="password" class="join_pwd" placeholder="비밀번호">
                </td>
            </tr>
            <tr>
                <th>
                    이름
                </th>
                <td>
                    <input type="text" class="join_name">
                </td>
            </tr>
            <tr>
                <th>전화번호</th>
                <td>
                    <input type="text" class="join_phone">
                </td>
            </tr>
            <tr>
                <th>생년월일</th>
                <td>
                    <input type="text" class="join_birth">
                </td>
            </tr>

        </table>
        <button class="join_btn">회원가입</button>

    </div>
</section>
</body>
</html>