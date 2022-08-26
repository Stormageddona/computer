<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/includes/header.jsp"%>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <script>
        let seq ="${seq}"
    </script>
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

            <div class="qna_answer_area">
                <p>답글 내용</p>
            </div>
            <div class="qna_pager_area">

                </div>
            </div>
            <button class="answer_btn">
                답변
            </button>
        </div>
    </section>
</body>
</html>