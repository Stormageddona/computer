<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/includes/header.jsp"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="/assets/css/admin/product.css">
    <script>
        let type = "${type}"
    </script>
    <script src="/assets/js/admin/product.js"></script>
</head>
<body>
    <main>
        <section>
            <div class="section_wrap">
                <%@include file="/WEB-INF/includes/admin_aside.jsp"%>
                <div class="section_wrap_content">
    <button class="add_btn" data-type="${type}">제품 추가</button>
    <div class="serach_box">
        <input type="text" class="search_input" placeholder="제품명, 모델명, 회사">
    </div>
    <table class="product_table">
        <thead>
        </thead>
        <tbody>
        </tbody>
    </table>
    <div class="pager_box">
        
    </div>

    <div class="add_area">
        <div class="add_box">
            
        </div>
        <button class="add_submit">등록</button>
        <button onclick="cancel()">취소</button>
    </div>
    <div class="modify_area">
        <div class="modify_box">
            
        </div>
        <button class="modify_submit">등록</button>
        <button onclick="cancel()">취소</button>
    </div>
</div>

    </div>
    </section>
    </main>

</body>
</html>