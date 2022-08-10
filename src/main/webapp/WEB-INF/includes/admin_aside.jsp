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
                    <span>제품 관리</span>
                    <li><a href="/admin/product?type=1">CPU</a></li>
                    <li><a href="/admin/product?type=2">메인보드</a></li>
                    <li><a href="/admin/product?type=3">쿨러</a></li>
                    <li><a href="/admin/product?type=4">그래픽카드</a></li>
                    <li><a href="/admin/product?type=5">메모리</a></li>
                    <li><a href="/admin/product?type=6">파워</a></li>
                    <li><a href="/admin/product?type=7">케이스</a></li>
                    <li><a href="/admin/product?type=8">하드디스크</a></li>
                    <li><a href="/admin/product?type=9">SSD</a></li>
                    
                </li>
            </ul>
        </nav>
    </aside>
</body>
</html>