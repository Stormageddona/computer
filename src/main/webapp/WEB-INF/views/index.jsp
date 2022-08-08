<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/includes/header.jsp"%>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="/assets/css/reset.css">
    <link rel="stylesheet" href="/assets/css/index.css">

    <title>Document</title>
</head>
<body>
    <section class="best_product">
        <div class="best_product_wrap">
            <h3>베스트 상품</h3>

            <div class="best_content_area">
                <div class="content_menu">
                    <button class="on">CPU</button><span>|</span>
                    <button>그래픽카드</button><span>|</span>
                    <button>메모리</button><span>|</span>
                    <button>메인보드</button><span>|</span>
                    <button>등등</button><span>|</span>
                </div>

                <div class="content_box">
                    <div class="content_box_goods">
                        <div class="goods_img_area">
                            <img src="https://dummyimage.com/300x400" alt="">
                        </div>
                        <div class="goods_text_area">
                            <div class="good_ex">
                                <p>상품 성능 어쩌구저쩌구 적으면됨</p>
                            </div>
                            <div class="good_price">
                                <p>1000 원</p>
                            </div>
                        </div>
                    </div>

                    <div class="content_box_goods">
                        <div class="goods_img_area">
                            <img src="https://dummyimage.com/300x400" alt="">
                        </div>
                        <div class="goods_text_area">
                            <div class="good_ex">
                                <p>상품 성능 어쩌구저쩌구 적으면됨</p>
                            </div>
                            <div class="good_price">
                                <p>1000 원</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="content_box_goods">
                        <div class="goods_img_area">
                            <img src="https://dummyimage.com/300x400" alt="">
                        </div>
                        <div class="goods_text_area">
                            <div class="good_ex">
                                <p>상품 성능 어쩌구저쩌구 적으면됨</p>
                            </div>
                            <div class="good_price">
                                <p>1000 원</p>
                            </div>
                        </div>
                    </div>

                    <div class="content_box_goods">
                        <div class="goods_img_area">
                            <img src="https://dummyimage.com/300x400" alt="">
                        </div>
                        <div class="goods_text_area">
                            <div class="good_ex">
                                <p>상품 성능 어쩌구저쩌구 적으면됨</p>
                            </div>
                            <div class="good_price">
                                <p>1000 원</p>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
    </section>

    <section class="price_product">
        <div class="price_product_wrap">
            <h3>가격 순 상품</h3>

            <aside class="">
                <button class="on"><i class="fa-solid fa-microchip"></i></button>
                <button><i class="fa-solid fa-tachograph-digital"></i></button>
                <button><i class="fa-solid fa-memory"></i></button>
                <button><i class="fa-solid fa-chess-board"></i></button>
            </aside>

            <div class="price_product_goods">

                <div class="price_good_area">
                    <div class="price_filter">
                        <button>높은순</button>
                        <button>낮은순</button>
                    </div>

                    <div class="price_good_area_wrap">
                    <div class="price_good_box">
                        <div class="price_goods_img_area">
                            <img src="https://dummyimage.com/100x100" alt="">
                        </div>
                        <div class="price_goods_text_area">
                            <div class="goods_title">
                                <p>상품명1</p>
                            </div>
                            <div class="price_goods_price">
                                <p>10000 <span>원</span></p>
                            </div>
                        </div>
                    </div>

                    <div class="price_good_box">
                        <div class="price_goods_img_area">
                            <img src="https://dummyimage.com/200x200" alt="">
                        </div>
                        <div class="price_goods_text_area">
                            <div class="goods_title">
                                <p>상품명</p>
                            </div>
                            <div class="price_goods_price">
                                <p>10000 <span>원</span></p>
                            </div>
                        </div>
                    </div>

                    <div class="price_good_box">
                        <div class="price_goods_img_area">
                            <img src="https://dummyimage.com/200x200" alt="">
                        </div>
                        <div class="price_goods_text_area">
                            <div class="goods_title">
                                <p>상품명</p>
                            </div>
                            <div class="price_goods_price">
                                <p>10000 <span>원</span></p>
                            </div>
                        </div>
                    </div>

                    <div class="price_good_box">
                        <div class="price_goods_img_area">
                            <img src="https://dummyimage.com/200x200" alt="">
                        </div>
                        <div class="price_goods_text_area">
                            <div class="goods_title">
                                <p>상품명</p>
                            </div>
                            <div class="price_goods_price">
                                <p>10000 <span>원</span></p>
                            </div>
                        </div>
                    </div>

                    <div class="price_good_box">
                        <div class="price_goods_img_area">
                            <img src="https://dummyimage.com/200x200" alt="">
                        </div>
                        <div class="price_goods_text_area">
                            <div class="goods_title">
                                <p>상품명5</p>
                            </div>
                            <div class="price_goods_price">
                                <p>10000 <span>원</span></p>
                            </div>
                        </div>
                    </div>

                </div>

                </div>

            </div>
        </div>
    </section>

    <section class="review_section">
        <div class="review_section_wrap">
            <h3>BEST REVIEW <a href="">더 보기</a></h3>

            <div class="review_area">
                <div class="review_box">
                    <div class="reveiw_img_area">
                        <img src="https://dummyimage.com/300x300" alt="">
                    </div>
                    <div class="review_text_area">
                        <p class="review_title">제목</p>
                        <p class="review_summery">
                            리뷰 내용
                        </p>
                        <p class="review_user_space"><span class="score">평점 10점</span> 유저ID</p>
                    </div>
                </div>

                <div class="review_box">
                    <div class="reveiw_img_area">
                        <img src="https://dummyimage.com/300x300" alt="">
                    </div>
                    <div class="review_text_area">
                        <p class="review_title">제목</p>
                        <p class="review_summery">
                            리뷰 내용
                        </p>
                        <p class="review_user_space"><span class="score">평점 10점</span> 유저ID</p>
                    </div>
                </div>

                <div class="review_box">
                    <div class="reveiw_img_area">
                        <img src="https://dummyimage.com/300x300" alt="">
                    </div>
                    <div class="review_text_area">
                        <p class="review_title">제목</p>
                        <p class="review_summery">
                            리뷰 내용
                        </p>
                        <p class="review_user_space"><span class="score">평점 10점</span> 유저ID</p>
                    </div>
                </div>

                <div class="review_box">
                    <div class="reveiw_img_area">
                        <img src="https://dummyimage.com/300x300" alt="">
                    </div>
                    <div class="review_text_area">
                        <p class="review_title">제목</p>
                        <p class="review_summery">
                            리뷰 내용
                        </p>
                        <p class="review_user_space"><span class="score">평점 10점</span> 유저ID</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

</body>
</html>