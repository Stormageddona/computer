function pagecaseArea(keyword, page, Order) {
    pageControll = $(this)
    selectCaseList ($("#keyword").val(), page, Order);
    $(".page_area").html("");
    for(let i=0; i < pagecount; i++) {
        console.log(i);
        let tag = 
        '<a href="#" onclick="return false;">'+(i+1)+'</a>';
        $(".page_area").append(tag);
    }
    $(".page_area a").click(function(){
        let page = $(this).html();
        selectCaseList(keyword, page,Order, pageControll,pagecount );
    })
}

function pagecoolerArea(keyword, page, Order) {
    pageControll = $(this)
    selectcoolerList ($("#keyword").val(), page, Order);
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
}