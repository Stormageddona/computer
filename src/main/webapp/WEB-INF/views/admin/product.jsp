<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/includes/admin_aside.jsp"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <script>
        let type = "${type}"
    </script>
    <script src="/assets/js/admin/product.js"></script>
</head>
<body>
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
        <button class="cancel">취소</button>
    </div>
</body>
</html>