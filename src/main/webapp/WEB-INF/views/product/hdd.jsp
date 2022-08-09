<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/includes/header.jsp"%>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/assets/css/product.css">
</head>
<body>
    <section class="product_section">
        <div class="product_section_wrap">
    
            <%@include file="/WEB-INF/includes/product_aside.jsp"%>
    
            <div class="product_area">

                <%@include file="/WEB-INF/includes/product_markup.jsp"%>
                
            </div>

            <div class="page_area">
                
            </div>
    
        </div>
    </section>
</body>
</html>