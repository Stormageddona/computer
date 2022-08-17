<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/includes/header.jsp"%>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="/assets/js/board/board_list.js"></script>
    <title>Document</title>
</head>
<body>
    <section class="board_section">
        <div class="board_section_wrap">
            <h2>질문 게시판</h2>
            <div class="board_list_box">
                <table>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>조회수</th>
                            <th>작성일</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>번호</td>
                            <td>제목(댓글갯수)</td>
                            <td>작성자</td>
                            <td>조회수</td>
                            <td>작성일</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <form action="/board/list" id="search_form">
                <input type="text" id="keyword">
                <button type="submit">검색</button>
            </form>

        </div>
    </section>
</body>
</html>