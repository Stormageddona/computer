$("document").ready(function(){
    let query = window.location.search;
    let param = new URLSearchParams(query);
    let seq = param.get('seq');
    let type = param.get('type');
    $.ajax({
        url:"/api/product/detail?type="+type+"&seq="+seq,
        type:"get",
        success:function(r) {
            console.log(r.data);
            console.log(r.column);
            console.log(r.column_kr);
            $(".detail_product_info h3").html(""+r.data.name+"("+r.data.model_name+")")
            
            let Selectundefined
            let List = new Array();
            for (let e = 0 ; e < r.column.length ; e++)
            {   
                Selectundefined = r.column_kr[e] + " : "+eval("r.data."+r.column[e])+" / "
                if(r.column_kr[e] == "이름" || r.column_kr[e] == "이미지" || r.column_kr[e] == "모델명" || r.column_kr[e] == "가격" || r.column_kr[e] == "등록일") continue;
                let release = new Date(r.data.release_dt) ;
                let date = release.getFullYear() + "-" + release.getMonth() + "-" + release.getDate();
                if (r.column_kr[e] == "출시일") {
                    $(".product_info").append(r.column_kr[e] + " : " + date+" / ") ;
                    continue;
                }
                List.push(Selectundefined)
            }
            console.log(List)

            $(".product_info").append(List)

            $(".undefined").hide();
        }
    })
})