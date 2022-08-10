function pageArea(keyword, page, Order, selectfuntion) {
    pageControll = $(this)
    selectfuntion ($("#keyword").val(), page, Order);
    $(".page_area").html("");
    for(let i=0; i < pagecount; i++) {
        console.log(i);
        let tag = 
        '<a href="#" onclick="return false;">'+(i+1)+'</a>';
        $(".page_area").append(tag);
    }
    $(".page_area a").click(function(){
        let page = $(this).html();
        selectfuntion(keyword, page,Order, pageControll,pagecount );
    })
}

