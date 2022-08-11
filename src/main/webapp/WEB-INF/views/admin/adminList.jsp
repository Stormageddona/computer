<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/includes/admin_aside.jsp"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <script src="/assets/js/admin/adminList.js"></script>
</head>
<body>
    <main>
        <button class="add_account">사용자추가</button>
        <div class="search_box">
            <input type="text" name="keyword" placeholder="아이디 검색" value="${keyword}">
            <button type="submit">검색</button>
        </div>
        <table>
            <thead>
                <tr>
                    <td>번호</td>
                    <td>이름</td>
                    <td>전화번호</td>
                    <td>닉네임</td>
                    <td>생년월일</td>
                    <td>가입일</td>
                    <td>회원상태</td>
                </tr>
            </thead>
            <tbody class="admin_list">

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
            <p>회원상태</p>
            <select class="mod_status">
                <option value="1">정상</option>
                <option value="2">정지</option>
                <option value="3">탈퇴예정</option>
                <option value="4">탈퇴</option>
            </select>
            <button class="mod_submit">확인</button>
            <button class="mod_cancel">취소</button>
        </div>
        <div class="add_box">
            <p>아이디</p>
                <input type="text" class="add_id">
            <p>비밀번호</p>
                <input type="password" class="add_pwd">
            <p>이름</p>
                <input type="text" class="add_name">
            <p>전화번호</p>
                <input type="number" class="add_phone">
            <p>닉네임</p>
                <input type="text" class="add_nickname">
            <p>생년월일</p>
                <input type="text" class="add_birth">
            <br>
            <button class="add_submit">확인</button>
            <button class="add_cancel">취소</button>
        </div>
    </main>
</body>
</html>