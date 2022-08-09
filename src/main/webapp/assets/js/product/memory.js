function selectmemoryList(keyword, page, temp = null) {
    if(page == null || page == undefined) page = 1;
    if(keyword == null || keyword == undefined) keyword = "";
    $.ajax({
        url:"/api/product/memory?keyword="+keyword+'&page='+page,
        type:"get",
        success:function(r) {
            // console.log(r);
            // console.log(r.memoryListAsc);
            $(".product_box").html("");
            for(let i=0; i < r.memoryListDesc.length; i++) {
                let won = r.memoryListDesc[i].mmi_price.toLocaleString();
                let tag =
                '<div class="product_box_content">'+
                
                        '<div class="product_img_box">'+
                            '<img src="'+r.memoryListDesc[i].img_src+'" alt="">'+
                        '</div>'+

                        '<div class="product_text_box">'+
                            '<div class="product_tittle_box">'+
                                '<p>'+r.memoryListDesc[i].mmi_name+'('+r.memoryListDesc[i].mmi_model_name+')</p>'+
                            '</div>'+
                            '<div class="product_summary_box">'+
                                '<p> 저장소켓 갯수 : '+r.memoryListDesc[i].mmi_save_socket_num+' / 케이스 크기 : '+r.memoryListDesc[i].mmi_size+' / 사용가능 보드'+r.memoryListDesc[i].mmi_use_board+'</p>'+
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
                for(let i=0; i < r.memoryListDesc.length; i++) {
                    let won = r.memoryListDesc[i].mmi_price.toLocaleString();
                    let tag =
                    '<div class="product_box_content">'+
                    
                            '<div class="product_img_box">'+
                                '<img src="'+r.memoryListDesc[i].img_src+'" alt="">'+
                            '</div>'+
    
                            '<div class="product_text_box">'+
                                '<div class="product_tittle_box">'+
                                    '<p>'+r.memoryListDesc[i].mmi_name+'('+r.memoryListDesc[i].mmi_model_name+')</p>'+
                                '</div>'+
                                '<div class="product_summary_box">'+
                                    '<p> 저장소켓 갯수 : '+r.memoryListDesc[i].mmi_save_socket_num+' / 케이스 크기 : '+r.memoryListDesc[i].mmi_size+' / 사용가능 보드'+r.memoryListDesc[i].mmi_use_board+'</p>'+
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
                for(let i=0; i<r.memoryListAsc.length; i++) {
                    let won = r.memoryListAsc[i].mmi_price.toLocaleString();
                    let tag =
                    '<div class="product_box_content">'+

                        '<div class="product_img_box">'+
                            '<img src="'+r.memoryListAsc[i].img_src+'" alt="">'+
                        '</div>'+

                        '<div class="product_text_box">'+
                            '<div class="product_tittle_box">'+
                                '<p>'+r.memoryListAsc[i].mmi_name+'('+r.memoryListAsc[i].mmi_model_name+')</p>'+
                            '</div>'+
                            '<div class="product_summary_box">'+
                                '<p> 저장소켓 갯수 : '+r.memoryListAsc[i].mmi_save_socket_num+' / 케이스 크기 : '+r.memoryListAsc[i].mmi_size+' / 사용가능 보드'+r.memoryListAsc[i].mmi_use_board+'</p>'+
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
                
                // console.log("페이지갯수 : "+r.memoryListCnt);
                $(".page_area").html("");
                for(let i=0; i < r.memoryListCnt; i++) {
                    // console.log(i);
                    let tag = 
                    '<a href="#" onclick="return false;">'+(i+1)+'</a>';
                    $(".page_area").append(tag);
                }
                $(".page_area a").click(function(){
                    let page = $(this).html();
                    selectmemoryList(keyword, page, pageControll);
                })
                // console.log(temp)
                if (temp != null) $(temp).trigger("click")

                // console.log(page)
        }

    })
}