<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/includes/header.jsp"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="/assets/css/admin/account.css">
    <script src="/assets/js/admin/account.js"></script>
</head>
<body>
    
    <main>
        <section>
            <div class="section_wrap">
                <%@include file="/WEB-INF/includes/admin_aside.jsp"%>
                <div class="section_wrap_content">
        <button class="add_account">사용자추가</button>
        <div class="search_box">
                <input type="text" class="keyword" placeholder="검색어 입력" value="${keyword}">
                <button type="submit" class="submit_account">검색</button>
                <button type="button" class="input_reset">초기화</button>
            </div>
        <table class="account_box">
            <thead>
                <tr>
                    <td>번호</td>
                    <td>아이디</td>
                    <td>이름</td>
                    <td>전화번호</td>
                    <td>닉네임</td>
                    <td>생년월일</td>
                    <td>가입일</td>
                    <td>회원상태</td>
                    <td></td>
                    <td></td>
                </tr>
            </thead>
            <tbody class="user_list">
                
            </tbody>
        </table>
        
        <div class="page_area">

        </div>
        </div>
    </div>
    </section>
    </main>
    <%@include file="/WEB-INF/views/admin/popupbox.jsp"%>
</body>
</html>