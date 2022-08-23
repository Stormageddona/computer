<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/includes/header.jsp"%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="/assets/js/qna/qna_detail.js"></script>
    <title>Document</title>
</head>
<body>
    <section class="qna_detaile_section">
        <div class="qna_detail_wrap">
            <div class="qna_head_area">
                <p>제목</p>
                <div class="qna_head_user_info">
                    <p><span>유저명</span> | <span>작성일</span></p>
                </div>
            </div>

            <div class="qna_content_area">
                <p>문의 내용</p>
            </div>

            <div class="qna_comment_area">
                <div class="qna_comment_box">
                    
                </div>
                <div class="qna_pager_area">

                </div>
                <div class="qna_save_area">
                    <div class="qna_summary">
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                        
                    </div>
                    <div class="btn_area">
                        <button class="save">등록</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</body>
</html>