$("document").ready(function(){
    let query = window.location.search;
    let param = new URLSearchParams(query);
    let seq = param.get('seq');
    let type = param.get('type');
    $.ajax({
        url:"/api/product/detail?type="+type+"&seq="+seq,
        type:"get",
        success:function(r) {
            console.log(r);
        }
    })
})