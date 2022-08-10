function selectcoolerList(keyword, page, Order, temp = null, ListCnt) {
    if(page == null || page == undefined) page = 1;
    if(keyword == null || keyword == undefined) keyword = "";
    $.ajax({
        url:"/api/product/cooler?keyword="+keyword+'&page='+page+'&desc='+Order,
        type:"get",
        success:function(r) {
            console.log(r.coolerListAsc);
            $(".product_box").html("");
            for(let i=0; i < r.coolerList.length; i++) {
                let won = r.coolerList[i].coi_price.toLocaleString();
                let tag =
                '<div class="product_box_content">'+
                
                        '<div class="product_img_box" data-seq="'+r.coolerList[i].coi_seq+'">'+
                            '<img src="'+r.coolerList[i].img_src+'" alt="">'+
                        '</div>'+

                        '<div class="product_text_box">'+
                            '<div class="product_tittle_box">'+
                                '<p>'+r.coolerList[i].coi_name+'('+r.coolerList[i].coi_model_name+')</p>'+
                            '</div>'+
                            '<div class="product_summary_box">'+
                                '<p> 저장소켓 갯수 : '+r.coolerList[i].coi_save_socket_num+' / 케이스 크기 : '+r.coolerList[i].coi_size+' / 사용가능 보드'+r.coolerList[i].coi_use_board+'</p>'+
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



            // $(".page_area").html("");
            // for(let idx=0; idx < r.pageCnt; idx++){
                //     console.log(idx);
                //     let tag = 
                //     '<a href="#" onclick="return false;">'+(idx+1)+'</a>';
                //     $(".page_area").append(tag);
                // }
                
                console.log("페이지 A : "+r.coolerListCnt);
                console.log("페이지 B : "+ListCnt);
                let pagecount = r.coolerListCnt==null?ListCnt:r.coolerListCnt
                console.log("페이지갯수 : "+pagecount);
                $(".page_area").html("");
                for(let i=0; i < pagecount; i++) {
                    console.log(i);
                    let tag = 
                    '<a href="#" onclick="return false;">'+(i+1)+'</a>';
                    $(".page_area").append(tag);
                }
                $(".page_area a").click(function(){
                    let page = $(this).html();
                    selectcoolerList(keyword, page,Order, pageControll,pagecount );
                })
                console.log(temp)
                if (temp != null) $(temp).trigger("click")

                console.log("콘솔로그페이지"+page)
        }

    })
}