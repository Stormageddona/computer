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
        if(userGrade == null || userGrade == undefined || userGrade == "" || userGrade == 1) {
            alert("관리자가 아닙니다");
            history.back();
        }
    }
    if(realURL == '/admin/account') {
        if(userGrade == null || userGrade == undefined || userGrade == "" || userGrade == 1) {
            alert("관리자가 아닙니다");
            history.back();
        }
    }
    if(realURL == '/admin/adminList') {
        if(userGrade == null || userGrade == undefined || userGrade == "" || userGrade == 1) {
            alert("관리자가 아닙니다");
            history.back();
        }
    }


    if(user_seq == null || user_seq == "" || user_seq == undefined) {
        $(".user_tab").html("");
        let tag =
            '<a href="/account/login">로그인</a>'+
            '<a href="/account/join">회원가입</a> ';
        $(".user_tab").append(tag)
    } else {
        $(".user_tab").html("");
        let tag =
            '<a href="/account/modify">정보 수정</a>'+
            '<a href="/account/logout">로그아웃</a>'
        $(".user_tab").append(tag)
        
    }

    if(userGrade >= 2) {
        let tag = 
            '<li><a href="/admin/account">관리자 페이지</a></li>';
        $(".header_bottom nav ul").append(tag);
    }

        $(".search_form button").click(function(){
            // alert("ㅇㅇ")
            location.href='/product/all?keyword='+$(".search_form input").val();
        });
})