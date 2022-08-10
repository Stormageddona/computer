<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/includes/header.jsp"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <aside>
        <nav id="side_gnb">
            <ul>
                <li>
                    <i class="fas fa-user"></i>
                    <a href="/admin/account">유저 관리</a>
                </li>
                <li>
                    <i class="fas fa-user"></i>
                    <a href="/admin/adminList">관리자 관리</a>
                </li>
                <li>
                    <i class="fas fa-user"></i>
                    <a href="/admin/manage_product">제품 관리</a>
                </li>
            </ul>
        </nav>
    </aside>
</body>
</html>