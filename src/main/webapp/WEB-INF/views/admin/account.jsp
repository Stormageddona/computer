<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/includes/admin_aside.jsp"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <script src="/assets/js/admin/account.js"></script>
</head>
<body>
    <main>
        <table>
            <thead>
                <tr>
                    <td>번호</td>
                    <td>이름</td>
                    <td>전화번호</td>
                    <td>닉네임</td>
                    <td>생년월일</td>
                </tr>
            </thead>
            <tbody class="user_list">
                
            </tbody>
        </table>
        <div class="mod_box">
            <p>이름</p>
                <input type="text" class="mod_name">
            <p>전화번호</p>
                <input type="number" class="mod_phone">
            <p>닉네임</p>
                <input type="text" class="mod_nickname">
            <p>생년월일</p>
                <input type="text" class="mod_birth">
            <p>회원등급</p>
            <select class="mod_grade">
                <option value="1">일반 회원</option>
                <option value="2">관리자</option>
            </select>
            <button class="mod_submit">확인</button>
            <button class="mod_cancel">취소</button>
        </div>
    </main>
</body>
</html>