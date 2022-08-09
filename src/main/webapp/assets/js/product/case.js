function selectCaseList(keyword, page, temp = null, col) {
    if(page == null || page == undefined) page = 1;
    if(keyword == null || keyword == undefined) keyword = "";
    $.ajax({
        url:"/api/product/case?keyword="+keyword+'&page='+page,
        type:"get",
        success:function(r) {
            console.log(r.caseListAsc);
            $(".product_box").html("");
            for(let i=0; i < r.caseListDesc.length; i++) {
                let won = r.caseListDesc[i].csi_price.toLocaleString();
                let tag =
                '<div class="product_box_content">'+
                
                        '<div class="product_img_box">'+
                            '<img src="'+r.caseListDesc[i].img_src+'" alt="">'+
                        '</div>'+

                        '<div class="product_text_box">'+
                            '<div class="product_tittle_box">'+
                                '<p>'+r.caseListDesc[i].type+_name+'('+r.caseListDesc[i].csi_model_name+')</p>'+
                            '</div>'+
                            '<div class="product_summary_box">'+
                                '<p> 저장소켓 갯수 : '+r.caseListDesc[i].csi_save_socket_num+' / 케이스 크기 : '+r.caseListDesc[i].csi_size+' / 사용가능 보드'+r.caseListDesc[i].csi_use_board+'</p>'+
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
                for(let i=0; i < r.caseListDesc.length; i++) {
                    let won = r.caseListDesc[i].csi_price.toLocaleString();
                    let tag =
                    '<div class="product_box_content">'+
                    
                            '<div class="product_img_box">'+
                                '<img src="'+r.caseListDesc[i].img_src+'" alt="">'+
                            '</div>'+
    
                            '<div class="product_text_box">'+
                                '<div class="product_tittle_box">'+
                                    '<p>'+r.caseListDesc[i].csi_name+'('+r.caseListDesc[i].csi_model_name+')</p>'+
                                '</div>'+
                                '<div class="product_summary_box">'+
                                    '<p> 저장소켓 갯수 : '+r.caseListDesc[i].csi_save_socket_num+' / 케이스 크기 : '+r.caseListDesc[i].csi_size+' / 사용가능 보드'+r.caseListDesc[i].csi_use_board+'</p>'+
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
                for(let i=0; i<r.caseListAsc.length; i++) {
                    let won = r.caseListAsc[i].csi_price.toLocaleString();
                    let tag =
                    '<div class="product_box_content">'+

                        '<div class="product_img_box">'+
                            '<img src="'+r.caseListAsc[i].img_src+'" alt="">'+
                        '</div>'+

                        '<div class="product_text_box">'+
                            '<div class="product_tittle_box">'+
                                '<p>'+r.caseListAsc[i].csi_name+'('+r.caseListAsc[i].csi_model_name+')</p>'+
                            '</div>'+
                            '<div class="product_summary_box">'+
                                '<p> 저장소켓 갯수 : '+r.caseListAsc[i].csi_save_socket_num+' / 케이스 크기 : '+r.caseListAsc[i].csi_size+' / 사용가능 보드'+r.caseListAsc[i].csi_use_board+'</p>'+
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
                
                console.log("페이지갯수 : "+r.caseListCnt);
                $(".page_area").html("");
                for(let i=0; i < r.caseListCnt; i++) {
                    console.log(i);
                    let tag = 
                    '<a href="#" onclick="return false;">'+(i+1)+'</a>';
                    $(".page_area").append(tag);
                }
                $(".page_area a").click(function(){
                    let page = $(this).html();
                    selectCaseList(keyword, page, pageControll);
                })
                console.log(temp)
                if (temp != null) $(temp).trigger("click")

                console.log(page)
        }

    })
}