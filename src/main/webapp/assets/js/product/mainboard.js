function selectmainboardList(keyword, page, temp = null) {
    if(page == null || page == undefined) page = 1;
    if(keyword == null || keyword == undefined) keyword = "";
    $.ajax({
        url:"/api/product/mainboard?keyword="+keyword+'&page='+page,
        type:"get",
        success:function(r) {
            // console.log(r);
            // console.log(r.mainboardListAsc);
            $(".product_box").html("");
            for(let i=0; i < r.mainboardListDesc.length; i++) {
                let won = r.mainboardListDesc[i].mii_price.toLocaleString();
                let tag =
                '<div class="product_box_content">'+
                
                        '<div class="product_img_box">'+
                            '<img src="'+r.mainboardListDesc[i].img_src+'" alt="">'+
                        '</div>'+

                        '<div class="product_text_box">'+
                            '<div class="product_tittle_box">'+
                                '<p>'+r.mainboardListDesc[i].mii_name+'('+r.mainboardListDesc[i].mii_model_name+')</p>'+
                            '</div>'+
                            '<div class="product_summary_box">'+
                                '<p> 저장소켓 갯수 : '+r.mainboardListDesc[i].mii_save_socket_num+' / 케이스 크기 : '+r.mainboardListDesc[i].mii_size+' / 사용가능 보드'+r.mainboardListDesc[i].mii_use_board+'</p>'+
                            '</div>'+
                        '</div>'+

                        '<div class="product_add_box">'+
                            '<div class="product_price">'+
                                '<p>10점(10건)</p>'+

                            '</div>'+
                            '<div class="product_score">'+
                                '<p>'+won+' 원</p>'+

                            '</div>'+
                            '<div class="product_btn_box">'+
                                '<button>자세히보기</button>'+
                                '<button>리뷰작성</button>'+
                            '</div>'+
                        '</div>'+
                    '</div>'

                    $(".product_box").append(tag);
            }

            $(".price_desc").click(function(){
                pageControll = $(this)
                $(".product_box").html("");
                $(".product_menu button").removeClass("on");
                $(this).addClass("on");
                for(let i=0; i < r.mainboardListDesc.length; i++) {
                    let won = r.mainboardListDesc[i].mii_price.toLocaleString();
                    let tag =
                    '<div class="product_box_content">'+
                    
                            '<div class="product_img_box">'+
                                '<img src="'+r.mainboardListDesc[i].img_src+'" alt="">'+
                            '</div>'+
    
                            '<div class="product_text_box">'+
                                '<div class="product_tittle_box">'+
                                    '<p>'+r.mainboardListDesc[i].mii_name+'('+r.mainboardListDesc[i].mii_model_name+')</p>'+
                                '</div>'+
                                '<div class="product_summary_box">'+
                                    '<p> 저장소켓 갯수 : '+r.mainboardListDesc[i].mii_save_socket_num+' / 케이스 크기 : '+r.mainboardListDesc[i].mii_size+' / 사용가능 보드'+r.mainboardListDesc[i].mii_use_board+'</p>'+
                                '</div>'+
                            '</div>'+
    
                            '<div class="product_add_box">'+
                                '<div class="product_price">'+
                                    '<p>10점(10건)</p>'+
    
                                '</div>'+
                                '<div class="product_score">'+
                                    '<p>'+won+' 원</p>'+
    
                                '</div>'+
                                '<div class="product_btn_box">'+
                                    '<button>자세히보기</button>'+
                                    '<button>리뷰작성</button>'+
                                '</div>'+
                            '</div>'+
                        '</div>'
    
                        $(".product_box").append(tag);
                }
            })

            $(".price_asc").click(function(){
                pageControll = $(this)
                pagenum = 1
                $(".product_box").html("");
                $(".product_menu button").removeClass("on");
                $(this).addClass("on");
                for(let i=0; i<r.mainboardListAsc.length; i++) {
                    let won = r.mainboardListAsc[i].mii_price.toLocaleString();
                    let tag =
                    '<div class="product_box_content">'+

                        '<div class="product_img_box">'+
                            '<img src="'+r.mainboardListAsc[i].img_src+'" alt="">'+
                        '</div>'+

                        '<div class="product_text_box">'+
                            '<div class="product_tittle_box">'+
                                '<p>'+r.mainboardListAsc[i].mii_name+'('+r.mainboardListAsc[i].mii_model_name+')</p>'+
                            '</div>'+
                            '<div class="product_summary_box">'+
                                '<p> 저장소켓 갯수 : '+r.mainboardListAsc[i].mii_save_socket_num+' / 케이스 크기 : '+r.mainboardListAsc[i].mii_size+' / 사용가능 보드'+r.mainboardListAsc[i].mii_use_board+'</p>'+
                            '</div>'+
                        '</div>'+

                        '<div class="product_add_box">'+
                            '<div class="product_price">'+
                                '<p>10점(10건)</p>'+

                            '</div>'+
                            '<div class="product_score">'+
                                '<p>'+won+' 원</p>'+

                            '</div>'+
                            '<div class="product_btn_box">'+
                                '<button>자세히보기</button>'+
                                '<button>리뷰작성</button>'+
                            '</div>'+
                        '</div>'+
                    '</div>'

                    $(".product_box").append(tag);
                }

            })
                
                // console.log("페이지갯수 : "+r.mainboardListCnt);
                $(".page_area").html("");
                for(let i=0; i < r.mainboardListCnt; i++) {
                    // console.log(i);
                    let tag = 
                    '<a href="#" onclick="return false;">'+(i+1)+'</a>';
                    $(".page_area").append(tag);
                }
                $(".page_area a").click(function(){
                    let page = $(this).html();
                    selectmainboardList(keyword, page, pageControll);
                })
                // console.log(temp)
                if (temp != null) $(temp).trigger("click")

                // console.log(page)
        }

    })
}