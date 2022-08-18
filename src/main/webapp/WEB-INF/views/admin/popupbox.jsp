<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
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
    <p>회원등급</p>
        <select class="add_grade">
            <option value="1">일반회원</option>
            <option value="2">관리자</option>
        </select>
    <br>
    <button class="add_submit">확인</button>
    <button class="add_cancel">취소</button>
</div>