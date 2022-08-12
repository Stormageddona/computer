
function selectList(keyword, page, Order, url, temp = null, ListCnt) {
    let pageControll = null ;
    if(page == null || page == undefined) page = 1;
    if(keyword == null || keyword == undefined) keyword = "";
    $.ajax({
        url:"/api/product/"+url+"?keyword="+keyword+'&page='+page+'&desc='+Order+'&ordertype=price',
        type:"get",
        success:function(r) {
            console.log(r.List.length);
            console.log(r.ListCnt);
            $(".product_box").html("");
            if(r.List.length == 0) {
                let tag =
                '<div class="product_box_content">'+
                    '<p>상품이 없습니다</p>'+
                '</div>'
                $(".product_box").append(tag);
            } else{
            for(let i=0; i < r.List.length; i++) {
                let prod_type = "'/product/detail?seq="+r.List[i].seq+"&type="+type+"'"
                let won = r.List[i].price.toLocaleString();
                let tag =
                '<div class="product_box_content">'+
                
                        '<div class="product_img_box" data-seq="'+r.List[i].seq+'">'+
                            '<img src="'+r.List[i].img_src+'" alt="">'+
                        '</div>'+

                        '<div class="product_text_box">'+
                            '<div class="product_tittle_box">'+
                                '<p>'+r.List[i].name+'('+r.List[i].model_name+')</p>'+
                            '</div>'+
                            '<div class="product_summary_box">'+
                                '<p> 저장소켓 갯수 : '+r.List[i].save_socket_num+' / 케이스 크기 : '+r.List[i].size+' / 사용가능 보드'+r.List[i].use_board+'</p>'+
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
                                '<button onclick="location.href='+prod_type+'">자세히보기</button>'+
                                '<button>리뷰작성</button>'+
                            '</div>'+
                        '</div>'+
                    '</div>'

                    $(".product_box").append(tag);
            }
        }

                
                console.log("페이지 A : "+r.ListCnt);
                console.log("페이지 B : "+ListCnt);
                let pagecount = r.ListCnt==null?ListCnt:r.ListCnt
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
                    selectList(keyword, page,Order,url, pageControll,pagecount );
                })
                console.log(temp)
                if (temp != null) $(temp).trigger("click")

                console.log("콘솔로그페이지"+page)
        }

    })
}

function productList(keyword, page, url, prod_name) {
    $(".product_area h3").html(prod_name);
    $("#search_form").attr('action', '/product/'+url);

    if(keyword != null){
        selectList(keyword, page, true, url);
    }else {
        selectList(keyword, page, true, url);
        $("#search_form").on("submit", function(e){
            e.preventDefault(); 
            selectList ($("#keyword").val(), page, true, url);
        });
    }

    $(".price_desc").click(function(){
        $(".product_box").html("");
        $(".product_menu button").removeClass("on");
        $(this).addClass("on");
        pageArea($("#keyword").val(), page, true, url)
    })

    $(".price_asc").click(function(){
        $(".product_box").html("");
        $(".product_menu button").removeClass("on");
        $(this).addClass("on");
        pageArea($("#keyword").val(), page, false, url)
    })
}

let pageControll = null ;