$("document").ready(function(){
    let query = window.location.search;
    let param = new URLSearchParams(query);
    let seq = param.get('seq');
    $.ajax({
        url:"/api/board/detail?seq="+seq,
        type:"get",
        success:function(r) {
            console.log(r.boardDetailInfo)
        }
    })
})