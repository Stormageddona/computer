function selectcpuList(keyword, page, temp = null) {
    if(page == null || page == undefined) page = 1;
    if(keyword == null || keyword == undefined) keyword = "";
    $.ajax({
        url:"/api/product/cpu?keyword="+keyword+'&page='+page,
        type:"get",
        success:function(r) {
            console.log(r.cpuListAsc);
            $(".product_box").html("");
            for(let i=0; i < r.cpuListDesc.length; i++) {
                let won = r.cpuListDesc[i].cpi_price.toLocaleString();
                let tag =
                '<div class="product_box_content">'+
                
                        '<div class="product_img_box">'+
                            '<img src="'+r.cpuListDesc[i].img_src+'" alt="">'+
                        '</div>'+

                        '<div class="product_text_box">'+
                            '<div class="product_tittle_box">'+
                                '<p>'+r.cpuListDesc[i].cpi_name+'('+r.cpuListDesc[i].cpi_model_name+')</p>'+
                            '</div>'+
                            '<div class="product_summary_box">'+
                                '<p> 저장소켓 갯수 : '+r.cpuListDesc[i].cpi_save_socket_num+' / 케이스 크기 : '+r.cpuListDesc[i].cpi_size+' / 사용가능 보드'+r.cpuListDesc[i].cpi_use_board+'</p>'+
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
                for(let i=0; i < r.cpuListDesc.length; i++) {
                    let won = r.cpuListDesc[i].cpi_price.toLocaleString();
                    let tag =
                    '<div class="product_box_content">'+
                    
                            '<div class="product_img_box">'+
                                '<img src="'+r.cpuListDesc[i].img_src+'" alt="">'+
                            '</div>'+
    
                            '<div class="product_text_box">'+
                                '<div class="product_tittle_box">'+
                                    '<p>'+r.cpuListDesc[i].cpi_name+'('+r.cpuListDesc[i].cpi_model_name+')</p>'+
                                '</div>'+
                                '<div class="product_summary_box">'+
                                    '<p> 저장소켓 갯수 : '+r.cpuListDesc[i].cpi_save_socket_num+' / 케이스 크기 : '+r.cpuListDesc[i].cpi_size+' / 사용가능 보드'+r.cpuListDesc[i].cpi_use_board+'</p>'+
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
                for(let i=0; i<r.cpuListAsc.length; i++) {
                    let won = r.cpuListAsc[i].cpi_price.toLocaleString();
                    let tag =
                    '<div class="product_box_content">'+

                        '<div class="product_img_box">'+
                            '<img src="'+r.cpuListAsc[i].img_src+'" alt="">'+
                        '</div>'+

                        '<div class="product_text_box">'+
                            '<div class="product_tittle_box">'+
                                '<p>'+r.cpuListAsc[i].cpi_name+'('+r.cpuListAsc[i].cpi_model_name+')</p>'+
                            '</div>'+
                            '<div class="product_summary_box">'+
                                '<p> 저장소켓 갯수 : '+r.cpuListAsc[i].cpi_save_socket_num+' / 케이스 크기 : '+r.cpuListAsc[i].cpi_size+' / 사용가능 보드'+r.cpuListAsc[i].cpi_use_board+'</p>'+
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

            // $(".page_area").html("");
            // for(let idx=0; idx < r.pageCnt; idx++){
                //     console.log(idx);
                //     let tag = 
                //     '<a href="#" onclick="return false;">'+(idx+1)+'</a>';
                //     $(".page_area").append(tag);
                // }
                
                console.log("페이지갯수 : "+r.cpuListCnt);
                $(".page_area").html("");
                for(let i=0; i < r.cpuListCnt; i++) {
                    console.log(i);
                    let tag = 
                    '<a href="#" onclick="return false;">'+(i+1)+'</a>';
                    $(".page_area").append(tag);
                }
                $(".page_area a").click(function(){
                    let page = $(this).html();
                    selectcpuList(keyword, page, pageControll);
                })
                console.log(temp)
                if (temp != null) $(temp).trigger("click")

                console.log(page)
        }

    })
}