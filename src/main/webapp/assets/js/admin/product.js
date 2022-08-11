let prod = null ;
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
    $(".product_table tbody").html(tag)

    $.ajax
    ({
        url:"/api/product/"+prod,
        type:"get",
        success:function(result)
        {
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
        }
    })
})

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