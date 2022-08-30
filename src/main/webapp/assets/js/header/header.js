$("document").ready(function(){

    let query = window.location.search;
    let param = new URLSearchParams(query);
    let page = param.get('page');
    let keyword = param.get('keyword');
    let pageURL = location.href;
    let pageURLSplit = pageURL.split("/");
    let realURL = "/";
    for(let i=3; i<pageURLSplit.length; i++) {
        realURL += pageURLSplit[i]
        if(i != pageURLSplit.length-1) realURL += "/";
    }
    realURL = realURL.split("?")[0];
    if(realURL == '/admin/product') {
        if(userGrade == null || userGrade == undefined || userGrade == "" || userGrade != 3) {
            alert("관리자가 아닙니다");
            history.back();
        }
    }
    if(realURL == '/admin/account') {
        if(userGrade == null || userGrade == undefined || userGrade == "" || userGrade != 3) {
            alert("관리자가 아닙니다");
            history.back();
        }
    }
    if(realURL == '/admin/adminList') {
        if(userGrade == null || userGrade == undefined || userGrade == "" || userGrade != 3) {
            alert("관리자가 아닙니다");
            history.back();
        }
    }

        $(".search_form button").click(function(){
            // alert("ㅇㅇ")
            location.href='/product/all?keyword='+$(".search_form input").val();
        });
})