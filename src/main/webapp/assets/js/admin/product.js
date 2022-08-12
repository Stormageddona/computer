// 검색어 갱신종료 시간
const TIMED_OUT = 350 ;

let prod = null ;
let page = null ;
let keyword = null ;
let desc = false ;
let search = null ;
let ordertype = null ;
$(function()
{
    if(type == 1) prod = "cpu" ;
    else if(type == 2) prod = "mainboard" ;
    else if(type == 3) prod = "cooler" ;
    else if(type == 4) prod = "gpu" ;
    else if(type == 5) prod = "memory" ;
    else if(type == 6) prod = "power" ;
    else if(type == 7) prod = "case" ;
    else if(type == 8) prod = "hdd" ;
    else if(type == 9) prod = "ssd" ;
    let tag =
        '<td>제품 번호</td>' +
        '<td>제품 이름</td>' +
        '<td>모델명</td>' +
        '<td>가격</td>' +
        '<td>제품 출시일</td>' +
        '<td>제품 등록일</td>' +
        '<td></td>';
    $(".product_table thead").html(tag)
    let data = getData(prod,page,keyword,desc,search,ordertype)

    $.ajax
    ({
        url:"/api/product/add/"+prod, type:"get",
        success:function(result)
        {
            console.log(result)
            $(".add_btn").click(function()
            {
                $(".add_area").show()
                $(".add_box").html("")
                for (let i = 0 ;i < result.column_kr.length;i++)
                {
                    let tag = '<span>' + result.column_kr[i] + '</span><input type="text" class="'+ result.column[i] +'"><br>'
                    $(".add_box").append(tag)
                }
            })
        }
    })
    data.done(function(result)
    {

    })


    let timeout = 0
    $(".search_input").keyup(function()
    {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            keyword = $(this).val() ;
            getData(prod,page,keyword,desc,search,ordertype)
        }, TIMED_OUT
        );
        
    })


})

function pagerClick(num)
{
    page = num ;
    getData(prod,page,keyword,desc,search,ordertype)
}

function deleteProduct(num)
{
    if(!confirm("삭제 하시겠습니까?")) return ;
    $.ajax
    ({
        url:"/api/admin/product?type=" + prod + "&seq="+num, type:"delete",
        success:function(result)
        {
            alert(result.message) ;
            location.reload() ;
            
        }
    })
}

function getData(prod,page,keyword,desc,search,ordertype)
{
    return $.ajax
    ({
        url:"/api/product/"+prod+"?page="+page+"&keyword="+keyword+"&desc="+desc+"&search="+search+"&ordertype="+ordertype ,
        type:"get",
        success:function(result)
        {
            $(".product_table tbody").html("")
            for (let i = 0 ; i < result.List.length;i++)
            {
                tag =
                '<tr>'+
                    '<td>' + result.List[i].seq + '</td>' +
                    '<td>' + result.List[i].name + '</td>' +
                    '<td>' + result.List[i].model_name + '</td>' +
                    '<td>' + result.List[i].price + '</td>' +
                    '<td>' + result.List[i].release_dt + '</td>' +
                    '<td>' + result.List[i].reg_dt +'</td>' +
                    '<td><button class="delete_btn" onClick=deleteProduct(' + result.List[i].seq + ')>삭제</td>' +
                '</tr>'
                $(".product_table tbody").append(tag)

            }
            // let pager_max = result.ListCnt>10?10:result.ListCnt ;
            // $(".pager_box").html("")
            // for (let i = 0 ; i < result.ListCnt ;i++)
            // {
            //     if (result.ListCnt <)
            //     $(".pager_box").append("<button class='pager_btn' onClick=pagerClick(" + (i+1) +")>" + (i+1) + "</button>")
            //     if (i == 9)
            //     {
            //         $(".pager_box").append("<button class='pager_btn' onClick=pagerClick(" + (((i/10)*10)+1) +")> \>\></button>")
            //     }
            // }
        }
    })


}
