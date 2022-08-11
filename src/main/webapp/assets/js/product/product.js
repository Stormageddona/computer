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
        productList($("#keyword").val(), keyword, page, true, false, "case", "케이스")
    }
    if(realURL == '/product/cooler') {
        productList($("#keyword").val(), keyword, page, true, false, "cooler", "쿨러")
    }
    if(realURL == '/product/cpu') {
        productList($("#keyword").val(), keyword, page, true, false, "cpu", "CPU")
    }
    if(realURL == '/product/gpu') {
        productList($("#keyword").val(), keyword, page, true, false, "gpu", "GPU")
    }
    if(realURL == '/product/hdd') {
        productList($("#keyword").val(), keyword, page, true, false, "hdd", "하드디스크")
    }
    if(realURL == '/product/memory') {
        productList($("#keyword").val(), keyword, page, true, false, "memory", "메모리카드")
    }
    if(realURL == '/product/mainboard') {
        productList($("#keyword").val(), keyword, page, true, false, "mainboard", "메인보드")
    }
    if(realURL == '/product/power') {
        productList($("#keyword").val(), keyword, page, true, false, "power", "power")
    }
    if(realURL == '/product/ssd') {
        productList($("#keyword").val(), keyword, page, true, false, "ssd", "SSD")
    }
})