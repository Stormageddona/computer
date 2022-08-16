
function selectList(keyword, page, Order, url, temp = null, ListCnt) {
    let pageControll = null ;
    if(page == null || page == undefined) page = 1;
    if(keyword == null || keyword == undefined) keyword = "";
    $.ajax({
        url:"/api/product/"+url+"?keyword="+keyword+'&page='+page+'&desc='+Order+'&ordertype=price',
        type:"get",
        success:function(r) {
            console.log(r.List);
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

                    // $(".product_summary_box p").html("");
                    let release = new Date(r.List[i].release_dt) ;
                    let date = release.getFullYear() + "-" + release.getMonth() + "-" + release.getDate();
                    // productExplanation(url, date, r.List[i]);
                    // let prod_summary =
                    //     // 공용 내용
                    //     '<span class="'+date+'">출시일 : '+date+'</span> '+
                    //     '<span class="'+r.List[i].company+'">제조사 : '+r.List[i].company+'</span> '+

                    //     // etc 기타 공용
                    //     '<span class="'+r.List[i].type+'">타입 : '+r.List[i].type+'</span> '+
                    //     '<span class="'+r.List[i].volume+'">용량 : '+r.List[i].volume+'</span> '+

                    //     // cpu
                    //     '<span class="'+r.List[i].clock+'">기본클럭 : '+r.List[i].clock+'</span> '+
                    //     '<span class="'+r.List[i].thread_num+'">쓰레드 갯수 : '+r.List[i].thread_num+'</span> '+
                    //     '<span class="'+r.List[i].core_num+'">코어갯수 : '+r.List[i].core_num+'</span> '+
                    //     '<span class="'+r.List[i].cache+'">L3 캐쉬 :'+r.List[i].cache+'</span> '+
                    //     '<span class="'+r.List[i].graphic+'">내장그래픽 유무 : '+r.List[i].graphic+'</span> '+

                    //     // gpu 그래픽카드
                    //     '<span class="'+r.List[i].boost_clock+'">부스트 클럭 : '+r.List[i].boost_clock+'Hz</span> '+
                    //     '<span class="'+r.List[i].dp_num+'">출력단자 : DP'+r.List[i].dp_num+', HDMI'+r.List[i].hdmi_num+'</span> '+
                    //     '<span class="'+r.List[i].interface+'">인터페이스 : '+r.List[i].interface+',</span> '+
                    //     '<span class="'+r.List[i].length+'">크기 : '+r.List[i].length+'</span> '+
                    //     '<span class="'+r.List[i].lineup+'">라인업 : '+r.List[i].lineup+'</span> '+
                    //     '<span class="'+r.List[i].memory_volume+'">메모리 용량 : '+r.List[i].memory_volume+'</span> '+
                    //     '<span class="'+r.List[i].power_use+'">파워 사용량 : '+r.List[i].power_use+'</span> '+

                    //     // cooler 쿨러
                    //     '<span class="'+r.List[i].size+'">사이즈 : '+r.List[i].size+'</span> '+
                    //     '<span class="'+r.List[i].noize+'">소음 : '+r.List[i].noize+'</span> '+

                    //     // memory 메모리
                    //     '<span class="'+r.List[i].clock+'">타입 : '+r.List[i].type+'</span> '+


                    //     // case 케이스
                    //     '<span class="'+r.List[i].use_board+'">사용가능 보드 : '+r.List[i].use_board+'</span> '+
                    //     '<span class="'+r.List[i].save_socket_num+'">저장소켓 : '+r.List[i].save_socket_num+'</span> '+

                    //     // mainboard 메인보드
                    //     '<span class="'+r.List[i].fomr_factor+'">폼팩터 : '+r.List[i].fomr_factor+'</span> '+
                    //     '<span class="'+r.List[i].power_supply+'">파워 서플라이 : '+r.List[i].power_supply+'</span> '+
                    //     '<span class="'+r.List[i].memory_version+'">메모리 버전 : '+r.List[i].memory_version+'</span> '+
                    //     '<span class="'+r.List[i].memory_socket+'">메모리 소켓 : '+r.List[i].memory_socket+'</span> '+
                    //     '<span class="'+r.List[i].pclex16_num+'">pclex16 : '+r.List[i].pclex16_num+'</span> '+
                    //     '<span class="'+r.List[i].pclex1_num+'">pclex1 : '+r.List[i].pclex1_num+'</span> '+
                    //     '<span class="'+r.List[i].sata_version+'">SATA버젼 : '+r.List[i].sata_version+'</span> '+
                    //     '<span class="'+r.List[i].sata_num+'">사타케이블 수 : '+r.List[i].sata_num+'</span> '+

                    //     // hdd 하드디스크, ssd 공용
                    //     '<span class="'+r.List[i].read_speed+'">읽기속도 : '+r.List[i].read_speed+'</span> '+
                    //     '<span class="'+r.List[i].write_speed+'">쓰기속도 : '+r.List[i].write_speed+'</span> '+

                    //     // power 파워
                    //     '<span class="'+r.List[i].reted_power+'">쓰기속도 : '+r.List[i].reted_power+'</span> '+
                    //     '<span class="'+r.List[i].size+'">쓰기속도 : '+r.List[i].size+'</span> '+

                    //     // ssd
                    //     '<span class="'+r.List[i].standard+'">쓰기속도 : '+r.List[i].standard+'</span> '+
                    //     '<span class="'+r.List[i].interface+'">쓰기속도 : '+r.List[i].interface+'</span> '
                    //     $(".product_summary_box p").append(prod_summary)
                    //     $("span.undefined").hide();
            }
        }

                
                console.log("페이지 A : "+r.ListCnt);
                console.log("페이지 B : "+ListCnt);
                let pagecount = r.ListCnt==null?ListCnt:r.ListCnt
                // let countpage = 10
                // let startpage = ((ListCnt - 1) / countpage) * countpage + 1;
                // let endpage = startpage + countpage + 1;
                // if (endpage > pagecount) {
                //     page = totalpage;
                // }
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

function productExplanation(url, date, list) {

    let prod_summary = '';
    if(url == 'case') {
        prod_summary = 
        '<span class="'+date+'">출시일 : '+date+'</span> '+
        '<span class="'+list.company+'">제조사 : '+list.company+'</span> '+
        '<span class="'+list.use_board+'">사용가능 보드 : '+list.use_board+'</span> '+
        '<span class="'+list.save_socket_num+'">저장소켓 : '+list.save_socket_num+'</span> '+
        '<span class="'+list.size+'">사이즈 : '+list.size+'</span> '
        $(".product_summary_box p").append(prod_summary)
    }else if(url == 'mainboard') {
        prod_summary =
        '<span class="'+date+'">출시일 : '+date+'</span> '+
        '<span class="'+list.company+'">제조사 : '+list.company+'</span> '+
        '<span class="'+list.fomr_factor+'">폼팩터 : '+list.fomr_factor+'</span> '+
        '<span class="'+list.power_supply+'">파워 서플라이 : '+list.power_supply+'</span> '+
        '<span class="'+list.memory_version+'">메모리 버전 : '+list.memory_version+'</span> '+
        '<span class="'+list.memory_socket+'">메모리 소켓 : '+list.memory_socket+'</span> '+
        '<span class="'+list.pclex16_num+'">pclex16 : '+list.pclex16_num+'</span> '+
        '<span class="'+list.pclex1_num+'">pclex1 : '+list.pclex1_num+'</span> '+
        '<span class="'+list.sata_version+'">SATA버젼 : '+list.sata_version+'</span> '+
        '<span class="'+list.sata_num+'">사타케이블 수 : '+list.sata_num+'</span> ';
        $(".product_summary_box p").append(prod_summary)
    }else if(url == 'memory') {
        prod_summary =
        '<span class="'+date+'">출시일 : '+date+'</span> '+
        '<span class="'+list.company+'">제조사 : '+list.company+'</span> '+
        '<span class="'+list.clock+'">타입 : '+list.type+'</span> '+
        '<span class="'+list.clock+'">기본클럭 : '+list.clock+'</span> '+
        '<span class="'+list.volume+'">용량 : '+list.volume+'</span> '+
        $(".product_summary_box p").append(prod_summary)
    }else if(url == 'memory') {
        prod_summary =
        '<span class="'+date+'">출시일 : '+date+'</span> '+
        '<span class="'+list.company+'">제조사 : '+list.company+'</span> '+
        '<span class="'+list.clock+'">타입 : '+list.type+'</span> '+
        '<span class="'+list.clock+'">기본클럭 : '+list.clock+'</span> '+
        '<span class="'+list.volume+'">용량 : '+list.volume+'</span> '+
        $(".product_summary_box p").append(prod_summary)
    }

        // // 공용 내용
        // '<span class="'+date+'">출시일 : '+date+'</span> '+
        // '<span class="'+list.company+'">제조사 : '+list.company+'</span> '+

        // // etc 기타 공용
        // '<span class="'+list.type+'">타입 : '+list.type+'</span> '+
        // '<span class="'+list.volume+'">용량 : '+list.volume+'</span> '+

        // // cpu
        // '<span class="'+list.clock+'">기본클럭 : '+list.clock+'</span> '+
        // '<span class="'+list.thread_num+'">쓰레드 갯수 : '+list.thread_num+'</span> '+
        // '<span class="'+list.core_num+'">코어갯수 : '+list.core_num+'</span> '+
        // '<span class="'+list.cache+'">L3 캐쉬 :'+list.cache+'</span> '+
        // '<span class="'+list.graphic+'">내장그래픽 유무 : '+list.graphic+'</span> '+

        // // gpu 그래픽카드
        // '<span class="'+list.boost_clock+'">부스트 클럭 : '+list.boost_clock+'Hz</span> '+
        // '<span class="'+list.dp_num+'">출력단자 : DP'+list.dp_num+', HDMI'+list.hdmi_num+'</span> '+
        // '<span class="'+list.interface+'">인터페이스 : '+list.interface+',</span> '+
        // '<span class="'+list.length+'">크기 : '+list.length+'</span> '+
        // '<span class="'+list.lineup+'">라인업 : '+list.lineup+'</span> '+
        // '<span class="'+list.memory_volume+'">메모리 용량 : '+list.memory_volume+'</span> '+
        // '<span class="'+list.power_use+'">파워 사용량 : '+list.power_use+'</span> '+

        // // cooler 쿨러
        // '<span class="'+list.size+'">사이즈 : '+list.size+'</span> '+
        // '<span class="'+list.noize+'">소음 : '+list.noize+'</span> '+

        // // memory 메모리
        // '<span class="'+list.clock+'">타입 : '+list.type+'</span> '+


        // // case 케이스
        // '<span class="'+list.use_board+'">사용가능 보드 : '+list.use_board+'</span> '+
        // '<span class="'+list.save_socket_num+'">저장소켓 : '+list.save_socket_num+'</span> '+

        // // mainboard 메인보드
        // '<span class="'+list.fomr_factor+'">폼팩터 : '+list.fomr_factor+'</span> '+
        // '<span class="'+list.power_supply+'">파워 서플라이 : '+list.power_supply+'</span> '+
        // '<span class="'+list.memory_version+'">메모리 버전 : '+list.memory_version+'</span> '+
        // '<span class="'+list.memory_socket+'">메모리 소켓 : '+list.memory_socket+'</span> '+
        // '<span class="'+list.pclex16_num+'">pclex16 : '+list.pclex16_num+'</span> '+
        // '<span class="'+list.pclex1_num+'">pclex1 : '+list.pclex1_num+'</span> '+
        // '<span class="'+list.sata_version+'">SATA버젼 : '+list.sata_version+'</span> '+
        // '<span class="'+list.sata_num+'">사타케이블 수 : '+list.sata_num+'</span> '+

        // // hdd 하드디스크, ssd 공용
        // '<span class="'+list.read_speed+'">읽기속도 : '+list.read_speed+'</span> '+
        // '<span class="'+list.write_speed+'">쓰기속도 : '+list.write_speed+'</span> '+

        // // power 파워
        // '<span class="'+list.reted_power+'">쓰기속도 : '+list.reted_power+'</span> '+
        // '<span class="'+list.size+'">쓰기속도 : '+list.size+'</span> '+

        // // ssd
        // '<span class="'+list.standard+'">쓰기속도 : '+list.standard+'</span> '+
        // '<span class="'+list.interface+'">쓰기속도 : '+list.interface+'</span> '
        // $(".product_summary_box p").append(prod_summary)
        // $("span.undefined").hide();
}