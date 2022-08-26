<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/includes/header.jsp"%>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="/assets/js/estimate/estimate.js"></script>
    <link rel="stylesheet" href="/assets/css/estimate/estimate.css">

</head>
<body>
    <h1>견적페이지</h1>
    <div class="info_area">
        <table>
            <tbody>
            </tbody>
        </table>
        <div class="pager_area"></div>
    </div>
    <div class="esti_area">
            <button class="esti" data-type="cpu">CPU</button>
            <div class="cpu"></div>
            <button class="esti" data-type="cooler">쿨러</button>
            <div class="cooler"></div>
            <button class="esti" data-type="gpu">그래픽카드</button>
            <div class="gpu"></div>
            <button class="esti" data-type="memory">메모리</button>
            <div class="memory"></div>
            <button class="esti" data-type="mainboard">메인보드</button>
            <div class="mainboard"></div>
            <button class="esti" data-type="power">파워</button>
            <div class="power"></div>
            <button class="esti" data-type="ssd">SSD</button>
            <div class="ssd"></div>
            <button class="esti" data-type="hdd">HDD</button>
            <div class="hdd"></div>
            <button class="esti" data-type="case">케이스</button>
            <div class="case"></div>
            <span class="total_price"></span>
            <button class="cart_save">견적 정보 저장</button>
            <button class="cart_delete">견적 정보 삭제</button>
    </div>
</body>
</html>