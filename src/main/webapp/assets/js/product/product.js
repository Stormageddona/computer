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
            pageArea($("#keyword").val(), page,true, selectCaseList)
        })

        $(".price_asc").click(function(){
            $(".product_box").html("");
            $(".product_menu button").removeClass("on");
            $(this).addClass("on");
            pageArea($("#keyword").val(), page,false,selectCaseList)
        })

    }
    if(realURL == '/product/cooler') {
        $(".product_area h3").html("쿨러");
        $("#search_form").attr("action", "/product/cooler");

        if(keyword != null){
            selectcoolerList(keyword, page, true);
        }else {
            selectcoolerList(keyword, page, true);
            $("#search_form").on("submit", function(e){
                e.preventDefault(); 
                selectcoolerList ($("#keyword").val(), page, true);
            });
        }

        $(".price_desc").click(function(){
            $(".product_box").html("");
            $(".product_menu button").removeClass("on");
            $(this).addClass("on");
            pageArea($("#keyword").val(), page, true, selectcoolerList)
        })

        $(".price_asc").click(function(){
            $(".product_box").html("");
            $(".product_menu button").removeClass("on");
            $(this).addClass("on");
            pageArea($("#keyword").val(), page, false, selectcoolerList)
        })
    }
    if(realURL == '/product/cpu') {
        $(".product_area h3").html("CPU");
        $("#search_form").attr("action", "/product/cpu");

        if(keyword != null){
            selectcpuList(keyword, page, true);
        }else {
            selectcpuList(keyword, page, true);
            $("#search_form").on("submit", function(e){
                e.preventDefault(); 
                selectcpuList ($("#keyword").val(), page, true);
            });
        }

        $(".price_desc").click(function(){
            $(".product_box").html("");
            $(".product_menu button").removeClass("on");
            $(this).addClass("on");
            pageArea($("#keyword").val(), page,true,selectcpuList)
        })

        $(".price_asc").click(function(){
            $(".product_box").html("");
            $(".product_menu button").removeClass("on");
            $(this).addClass("on");
            pageArea($("#keyword").val(), page,false,selectcpuList)
        })
    }
    if(realURL == '/product/gpu') {
        $(".product_area h3").html("그래픽카드");
        $("#search_form").attr("action", "/product/gpu");

        if(keyword != null){
            selectgpuList(keyword, page, true);
        }else {
            selectgpuList(keyword, page, true);
            $("#search_form").on("submit", function(e){
                e.preventDefault(); 
                selectgpuList ($("#keyword").val(), page, true);
            });
        }

        $(".price_desc").click(function(){
            $(".product_box").html("");
            $(".product_menu button").removeClass("on");
            $(this).addClass("on");
            pageArea($("#keyword").val(), page,true,selectgpuList)
        })

        $(".price_asc").click(function(){
            $(".product_box").html("");
            $(".product_menu button").removeClass("on");
            $(this).addClass("on");
            pageArea($("#keyword").val(), page,false,selectgpuList)
        })
    }
    if(realURL == '/product/hdd') {
        $(".product_area h3").html("HDD");
        $("#search_form").attr("action", "/product/hdd");

        if(keyword != null){
            selecthddList(keyword, page, true);
        }else {
            selecthddList(keyword, page, true);
            $("#search_form").on("submit", function(e){
                e.preventDefault(); 
                selecthddList ($("#keyword").val(), page, true);
            });
        }

        $(".price_desc").click(function(){
            $(".product_box").html("");
            $(".product_menu button").removeClass("on");
            $(this).addClass("on");
            pageArea($("#keyword").val(), page,true,selecthddList)
        })

        $(".price_asc").click(function(){
            $(".product_box").html("");
            $(".product_menu button").removeClass("on");
            $(this).addClass("on");
            pageArea($("#keyword").val(), page,false,selecthddList)
        })
    }
    if(realURL == '/product/mainboard') {
        $(".product_area h3").html("메인보드");
        $("#search_form").attr("action", "/product/mainboard");

        if(keyword != null){
            selectmainboardList(keyword, page, true);
        }else {
            selectmainboardList(keyword, page, true);
            $("#search_form").on("submit", function(e){
                e.preventDefault(); 
                selectmainboardList ($("#keyword").val(), page, true);
            });
        }

        $(".price_desc").click(function(){
            $(".product_box").html("");
            $(".product_menu button").removeClass("on");
            $(this).addClass("on");
            pageArea($("#keyword").val(), page,true,selectmainboardList)
        })

        $(".price_asc").click(function(){
            $(".product_box").html("");
            $(".product_menu button").removeClass("on");
            $(this).addClass("on");
            pageArea($("#keyword").val(), page,false,selectmainboardList)
        })
    }
    if(realURL == '/product/memory') {
        $(".product_area h3").html("메모리 카드");
        $("#search_form").attr("action", "/product/memory");

        if(keyword != null){
            selectmemoryList(keyword, page, true);
        }else {
            selectmemoryList(keyword, page, true);
            $("#search_form").on("submit", function(e){
                e.preventDefault(); 
                selectmemoryList ($("#keyword").val(), page, true);
            });
        }

        $(".price_desc").click(function(){
            $(".product_box").html("");
            $(".product_menu button").removeClass("on");
            $(this).addClass("on");
            pageArea($("#keyword").val(), page,true,selectmemoryList)
        })

        $(".price_asc").click(function(){
            $(".product_box").html("");
            $(".product_menu button").removeClass("on");
            $(this).addClass("on");
            pageArea($("#keyword").val(), page,false,selectmemoryList)
        })
    }
    if(realURL == '/product/power') {
        $(".product_area h3").html("파워");
        $("#search_form").attr("action", "/product/power");

        if(keyword != null){
            selectpowerList(keyword, page, true);
        }else {
            selectpowerList(keyword, page, true);
            $("#search_form").on("submit", function(e){
                e.preventDefault(); 
                selectpowerList ($("#keyword").val(), page, true);
            });
        }

        $(".price_desc").click(function(){
            $(".product_box").html("");
            $(".product_menu button").removeClass("on");
            $(this).addClass("on");
            pageArea($("#keyword").val(), page,true,selectpowerList)
        })

        $(".price_asc").click(function(){
            $(".product_box").html("");
            $(".product_menu button").removeClass("on");
            $(this).addClass("on");
            pageArea($("#keyword").val(), page,false,selectpowerList)
        })
    }
    if(realURL == '/product/ssd') {
        $(".product_area h3").html("SSD");
        $("#search_form").attr("action", "/product/ssd");

        if(keyword != null){
            selectssdList(keyword, page, true);
        }else {
            selectssdList(keyword, page, true);
            $("#search_form").on("submit", function(e){
                e.preventDefault(); 
                selectssdList ($("#keyword").val(), page, true);
            });
        }

        $(".price_desc").click(function(){
            $(".product_box").html("");
            $(".product_menu button").removeClass("on");
            $(this).addClass("on");
            pageArea($("#keyword").val(), page,true,selectssdList)
        })

        $(".price_asc").click(function(){
            $(".product_box").html("");
            $(".product_menu button").removeClass("on");
            $(this).addClass("on");
            pageArea($("#keyword").val(), page,false,selectssdList)
        })
    }

})

let pageControll = null ;