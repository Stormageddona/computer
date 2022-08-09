<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/includes/header.jsp"%>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<link rel="stylesheet" href="/assets/css/reset.css">
<link rel="stylesheet" href="/assets/css/login.css">
<script src="/assets/js/account/login.js"></script>

<section class="login_section">
    <div class="login_wrap">
        <div class="login_box">
            <h3>로그인</h3>
            <input type="text" placeholder="아이디" class="id_input">
            <input type="password" placeholder="비밀번호" class="pwd_input">
            <button class="login">로그인</button>
            <button class="join">회원가입</button>
            <div class="temp"style="font-size: 14px;">
                <a href="/account/find/id">아이디</a><span>·</span><a href="/account/find/pwd">비밀번호</a>찾기
            </div>
            
        </div>
    </div>
</section>