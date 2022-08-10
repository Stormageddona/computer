$("document").ready(function(){
    let query = window.location.search;
    let param = new URLSearchParams(query);
    let page = param.get('page');
    let keyword = param.get('keyword');
    let pageURL = location.href;
    let pageURLSplit = pageURL.split("/");
    // let pageControll = null ;
    console.log(pageURLSplit);
    let realURL = "/";
    for(let i=3; i<pageURLSplit.length; i++) {
        realURL += pageURLSplit[i]
        if(i != pageURLSplit.length-1) realURL += "/";
    }
    realURL = realURL.split("?")[0];
    if(realURL == '/product/case') {
        $(".product_area h3").html("케이스");
        $("#search_form").attr("action", "/product/case");
        
        
        if(keyword != null){
            selectCaseList(keyword, page, true);
        }else {
            selectCaseList(keyword, page, true);
            $("#search_form").on("submit", function(e){
                e.preventDefault(); 
                selectCaseList ($("#keyword").val(), page, true);
            });
        }

        $(".price_desc").click(function(){
            $(".product_box").html("");
            $(".product_menu button").removeClass("on");
            $(this).addClass("on");
            pagecaseArea($("#keyword").val(), page,true)
        })

        $(".price_asc").click(function(){
            $(".product_box").html("");
            $(".product_menu button").removeClass("on");
            $(this).addClass("on");
            pagecaseArea($("#keyword").val(), page,false)
        })

    }
    // if(realURL == '/product/cooler') {
    //     $(".product_area h3").html("쿨러");
    //     $("#search_form").attr("action", "/product/cooler");

    //     if(keyword != null){
    //         selectcoolerList(keyword, page, true);
    //     }else {
    //         selectcoolerList(keyword, page, true);
    //         $("#search_form").on("submit", function(e){
    //             e.preventDefault(); 
    //             selectcoolerList ($("#keyword").val(), page, true);
    //         });
    //     }

    //     $(".price_desc").click(function(){
    //         $(".product_box").html("");
    //         $(".product_menu button").removeClass("on");
    //         $(this).addClass("on");
    //         pagecoolerArea($("#keyword").val(), page,true)
    //     })

    //     $(".price_asc").click(function(){
    //         $(".product_box").html("");
    //         $(".product_menu button").removeClass("on");
    //         $(this).addClass("on");
    //         pagecoolerArea($("#keyword").val(), page,false)
    //     })
    // }
    // if(realURL == '/product/cpu') {
    //     $(".product_area h3").html("CPU");
    //     $("#search_form").attr("action", "/product/cpu");

    //     if(keyword != null){
    //         selectcpuList(keyword, page, true);
    //     }else {
    //         selectcpuList(keyword, page, true);
    //         $("#search_form").on("submit", function(e){
    //             e.preventDefault(); 
    //             selectcpuList ($("#keyword").val(), page, true);
    //         });
    //     }

    //     $(".price_desc").click(function(){
    //         $(".product_box").html("");
    //         $(".product_menu button").removeClass("on");
    //         $(this).addClass("on");
    //         pageArea($("#keyword").val(), page,true)
    //     })

    //     $(".price_asc").click(function(){
    //         $(".product_box").html("");
    //         $(".product_menu button").removeClass("on");
    //         $(this).addClass("on");
    //         pageArea($("#keyword").val(), page,false)
    //     })
    // }
    // if(realURL == '/product/gpu') {
    //     $(".product_area h3").html("그래픽카드");
    //     $("#search_form").attr("action", "/product/gpu");

    //     if(keyword != null){
    //         selectgpuList(keyword, page, true);
    //     }else {
    //         selectgpuList(keyword, page, true);
    //         $("#search_form").on("submit", function(e){
    //             e.preventDefault(); 
    //             selectgpuList ($("#keyword").val(), page, true);
    //         });
    //     }

    //     $(".price_desc").click(function(){
    //         $(".product_box").html("");
    //         $(".product_menu button").removeClass("on");
    //         $(this).addClass("on");
    //         pageArea($("#keyword").val(), page,true)
    //     })

    //     $(".price_asc").click(function(){
    //         $(".product_box").html("");
    //         $(".product_menu button").removeClass("on");
    //         $(this).addClass("on");
    //         pageArea($("#keyword").val(), page,false)
    //     })
    // }
    // if(realURL == '/product/hdd') {
    //     $(".product_area h3").html("HDD");
    //     $("#search_form").attr("action", "/product/hdd");
    //     if(keyword != null){
    //         selecthddList(keyword, page);
    //     }else {
    //         selecthddList();
    //         $("#search_form").on("submit", function(e){
    //             e.preventDefault(); 
    //             selecthddList ($("#keyword").val(), 1);
    //         });
    //     }
    // }
    // if(realURL == '/product/mainboard') {
    //     $(".product_area h3").html("메인보드");
    //     $("#search_form").attr("action", "/product/mainboard");
    //     if(keyword != null){
    //         selectmainboardList(keyword, page);
    //     }else {
    //         selectmainboardList();
    //         $("#search_form").on("submit", function(e){
    //             e.preventDefault(); 
    //             selectmainboardList ($("#keyword").val(), 1);
    //         });
    //     }
    // }
    // if(realURL == '/product/memory') {
    //     $(".product_area h3").html("메모리 카드");
    //     $("#search_form").attr("action", "/product/memory");
    //     if(keyword != null){
    //         selectmemoryList(keyword, page);
    //     }else {
    //         selectmemoryList();
    //         $("#search_form").on("submit", function(e){
    //             e.preventDefault(); 
    //             selectmemoryList ($("#keyword").val(), 1);
    //         });
    //     }
    // }

})

let pageControll = null ;