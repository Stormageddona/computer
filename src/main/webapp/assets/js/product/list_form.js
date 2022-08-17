
function selectList(keyword, page, Order, url, temp = null, ListCnt) {
    let pageControll = null ;
    if(page == null || page == undefined) page = 1;
    if(keyword == null || keyword == undefined) keyword = "";

    $.ajax({
        url:"/api/product/"+url+"?keyword="+keyword+'&page='+page+'&desc='+Order+'&ordertype=price',
        type:"get",
        success:function(r) {
            let List = new Array() ;
            for (let e = 0 ; e < r.List.length ; e++)
            {
                let tempcolumn = new Array() ;
                for (let i = 0 ; i < r.column.length ; i++)
                {
                    tempcolumn.push(r.column_kr[i] + " : " + eval("r.List["+e+"]."+r.column[i]) )
                }
                List.push(tempcolumn)
            }
            console.log(List)
            


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
                                '<p> '+r.List[i]+' : '+r.List[i].save_socket_num+' / 케이스 크기 : '+r.List[i].size+' / 사용가능 보드'+r.List[i].use_board+'</p>'+
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

                    $(".product_summary_box p").html("");
                    for(e=0; e < r.column.length; e++){
                        let release = new Date(r.List[i].release_dt) ;
                        let date = release.getFullYear() + "-" + release.getMonth() + "-" + release.getDate();
                        if(r.column_kr[e] == "이름" || r.column_kr[e] == "이미지" || r.column_kr[e] == "모델명" || r.column_kr[e] == "가격" || r.column_kr[e] == "등록일") continue;
                        if (r.column_kr[e] == "출시일") 
                        {$(".product_summary_box p").append(r.column_kr[e] + ":" + date+" / ") ;
                        continue ;}

                        let appendCol =  r.column_kr[e] + " : " + eval("r.List["+i+"]."+r.column[e]);
                        console.log(e +"," +r.column.length)
                        if (e != r.column.length-1)
                        appendCol = appendCol + " / "
                        
                        $(".product_summary_box p").append(appendCol);
                    }
                    
                    
                }
        }
    


                
                // console.log("페이지 A : "+r.ListCnt);
                // console.log("페이지 B : "+ListCnt);
                let pagecount = r.ListCnt==null?ListCnt:r.ListCnt
                // let countpage = 10
                // let startpage = ((ListCnt - 1) / countpage) * countpage + 1;
                // let endpage = startpage + countpage + 1;
                // if (endpage > pagecount) {
                //     page = totalpage;
                // }
                // console.log("페이지갯수 : "+pagecount);
                $(".page_area").html("");

                for(let i=0; i < pagecount; i++) {
                    // console.log(i);
                    let tag = 
                    '<a href="#" onclick="return false;">'+(i+1)+'</a>';
                    $(".page_area").append(tag);
                }
                $(".page_area a").click(function(){
                    let page = $(this).html();
                    selectList(keyword, page,Order,url, pageControll,pagecount );
                })
                // console.log(temp)
                if (temp != null) $(temp).trigger("click")

                // console.log("콘솔로그페이지"+page)
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

