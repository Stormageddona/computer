$(function(){
    let query = window.location.search;
    let param = new URLSearchParams(query);
    let page = param.get('page');
    let keyword = param.get('keyword');
    if(page == null || page == undefined) page =1;
    if(keyword == null || keyword == undefined) keyword="";
    $.ajax({
        url:"/api/qna/list?keyword="+keyword+"&page="+page,
        type:"get",
        success:function(result){
            console.log(result);
        }
    })
})