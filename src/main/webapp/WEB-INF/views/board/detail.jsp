<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/includes/header.jsp"%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="/assets/js/board/board_detail.js"></script>
    <link rel="stylesheet" href="/assets/css/board_detail.css">
    <title>Document</title>
</head>
<body>
    <section class="board_detaile_section">
        <div class="board_detail_wrap">
            <div class="board_head_area">
                <p>제목</p>
                <div class="head_user_info">
                    <p><span>유저명</span> | <span>작성일</span></p>
                </div>
                <div class="board_info">
                    <p><span>조회수 100</span> | <span>추천 107</span> | <span>댓글 1</span></p>
                </div>
            </div>

            <div class="board_content_area">
                <p>게시글 내용</p>
            </div>

            <div class="board_comment_area">
                <div class="comment_box">
                    
                    <div class="comment_area">
                        <div class="comment_user">
                            <p>작성자</p>
                        </div>
                        <div class="comment_summary">
                            <p>댓글내용</p>
                        </div>
                        <div class="comment_reg_dt">
                            <p>날짜</p>
                        </div>
                    </div>

                </div>
                <div class="comment_pager_area">

                </div>
                <div class="comment_save_area">
                    <div class="user_name">
                        <P>닉네임</P>
                    </div>
                    <div class="comment_summary">
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