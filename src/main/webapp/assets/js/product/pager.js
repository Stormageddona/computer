function pageArea(keyword, page, Order, url) {
    pageControll = $(this)


    selectList ($("#keyword").val(), page, Order, url);
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
}

