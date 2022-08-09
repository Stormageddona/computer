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
            <!-- <aside>
                <div class="product_category">
                    <div class="product_name_box">
                        <h3>카테고리</h3>
                        <ul>
                            <li><a href="">메인보드</a><button><i class="fa-solid fa-caret-down"></i></button></li>
                            <li><a href="">메인보드</a><button><i class="fa-solid fa-caret-down"></i></button></li>
                            <li><a href="">메인보드</a><button><i class="fa-solid fa-caret-down"></i></button></li>
                            <li><a href="">메인보드</a><button><i class="fa-solid fa-caret-down"></i></button></li>
                            <li><a href="">메인보드</a><button><i class="fa-solid fa-caret-down"></i></button></li>
                        </ul>
                    </div>
                </div>
            </aside> -->
    
            <div class="product_area">

                <%@include file="/WEB-INF/includes/product_markup.jsp"%>
                <!-- <h3>카테고리명</h3>
                <div class="product_area_wrap">
                <div class="product_menu">
                    <button class="price_desc on">높은가격순</button><span>|</span>
                    <button class="price_asc">낮은가격순</button>
                </div>
                    <form action="/book/book" id="search_form">
                        <input type="text" id="keyword">
                        <button type="submit">검색</button>
                    </form>
                <div class="product_box">
    
                    <div class="product_box_content">
    
                        <div class="product_img_box">
                            <img src="https://dummyimage.com/200x200" alt="">
                        </div>
    
                        <div class="product_text_box">
                            <div class="product_tittle_box">
                                <p>이름</p>
                            </div>
                            <div class="product_summary_box">
                                <p>설명</p>
                            </div>
                        </div>
    
                        <div class="product_add_box">
                            <div class="product_price">
                                <p>10점(10건)</p>
                                
                            </div>
                            <div class="product_score">
                                <p>15500원</p>
                                
                            </div>
                            <div class="product_btn_box">
                                <button>자세히보기</button>
                                <button>리뷰작성</button>
                            </div>
                        </div>
                    </div>
    
                </div>
            </div> -->
            </div>

            <div class="page_area">
                
            </div>
    
        </div>
    </section>
</body>
</html>