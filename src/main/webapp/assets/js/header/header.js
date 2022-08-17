$("document").ready(function(){

        $(".search_form button").click(function(){
            // alert("ㅇㅇ")
            location.href='/product/all?keyword='+$(".search_form input").val();
        });
})