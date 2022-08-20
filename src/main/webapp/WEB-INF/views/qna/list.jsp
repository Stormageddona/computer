<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/includes/header.jsp"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="/assets/css/qna/list.css">
    <script src="/assets/js/qna/qna.js"></script>
</head>
<body>
    <!-- <section class="qna_section">
        <div class="qna_section_wrap">
            <div class="qna_content">

                <div class="question_area">
                    <div class="question_icon_area">
                        <i class="fa-solid fa-q"></i>
                    </div>
                    <div class="qna_list">

                    </div>
                    <div class="question_user_name_area">
                        <p>작성자</p>
                    </div>
                    <div class="question_summary_area">
                        <p>내용</p>
                    </div>
                </div>

                <div class="answer_area">
                    <div class="answer_icon_area">
                        <i class="fa-solid fa-a"></i>
                    </div>
                    <div class="answer_summary_area">
                        <p>답변</p>
                    </div>
                </div>

            </div>
        </div>
    </section> -->
    <div class="qna_search">
        <input type="text" class="qna_keyword" placeholder="검색어 입력" value="${keyword}">
        <button type="submit" class="submit_qna">검색</button>
    </div>
    <div class="qna_title">

    </div>
    <div class="comment_box">
        <table>
            <thead>
                <tr>
                    <td>번호</td>
                    <td>작성자</td>
                    <td>제목</td>
                    <td>날짜</td>
                </tr>
            </thead>
            <tbody class="qna_list">
                <tr class="question_tr" >
                    <td>번호</td>
                    <td>작성자명</td>
                    <td>제목</td>
                    <td>날짜</td>
                </tr>
                <!-- 기본적으로 display none -->
                <tr class="answer_tr">
                    <td><i class="fa-solid fa-arrow-turn-down-right"></i></td>
                    <td>작성자명</td>
                    <td>제목</td>
                    <td>날짜</td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
</html>