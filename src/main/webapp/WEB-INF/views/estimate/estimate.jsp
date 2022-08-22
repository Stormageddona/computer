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
    </div>
    <div class="esti_area">
        <table>
            <tr><td><button class="esti" data-type="cpu">CPU</button></td></tr>
            <tr><td><button class="esti" data-type="cooler">쿨러</button></td></tr>
            <tr><td><button class="esti" data-type="gpu">그래픽카드</button></td></tr>
            <tr><td><button class="esti" data-type="memory">메모리</button></td></tr>
            <tr><td><button class="esti" data-type="mainboard">메인보드</button></td></tr>
            <tr><td><button class="esti" data-type="power">파워</button></td></tr>
            <tr><td><button class="esti" data-type="ssd">SSD</button></td></tr>
            <tr><td><button class="esti" data-type="hdd">HDD</button></td></tr>
            <tr><td><button class="esti" data-type="case">케이스</button></td></tr>
        </table>
        
    </div>
</body>
</html>