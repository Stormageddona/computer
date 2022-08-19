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
            <input type="text" class="keyword" placeholder="검색어 입력" value="${keyword}">
            <button type="submit" class="submit_account">검색</button>
            <button type="button" class="input_reset">초기화</button>
        </div>
        <table>
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
                </tr>
            </thead>
            <tbody class="admin_list">

            </tbody>
        </table>

        <div class="page_area">
            
        </div>
    </main>
    <%@include file="/WEB-INF/views/admin/popupbox.jsp"%>
</body>
</html>