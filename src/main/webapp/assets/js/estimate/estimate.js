$("document").ready(function()
{
    $(".esti").click(function()
    {
        let adr = $(this).attr("data-type")
        
        $.ajax
        ({
            url:"/api/product/"+adr, type:"get",
            success:function(result)
            {
                
                console.log(result.List)
                $("info_area table tbody").html("")
                let column = getcolumnData(result)
                console.log(column)
                for (let i = 0 ; i < result.List.length ; i++)
                {
                    let detail = "" ;
                    for (let j = 0 ; j < column[1].length;j++)
                    {
                        detail = detail + column[1][j] + ":" + result.List[i][column[0][j]] + " / "
                    }
                    let tag = 
                        '<tr>' +
                            '<td>' +
                                '<div class="product_box">' +
                                    '<div class="img_box" style="background-image: url(/image'+result.List[i].img_src+');"></div>' +
                                    '<span class="prod_name">' + result.List[i].name + '</span>' +
                                    '<span class="prod_detail">' + detail + '</span>' +
                                    '<span class="prod_price">가격 : ' + result.List[i].price + '</span>' +
                                    '<button class="prod_select" >담기</button>' +
                                '</div>' +
                            '</td>' +
                        '</tr>'
                    $(".info_area > table > tbody").append(tag)
                }
                
            }
        })
    })
})


function getcolumnData(result)
{
    let tempArr_kr = new Array();
    let temp = new Array();
    
    for(let i=0; i<result.column_kr.length; i++) {
        tempArr_kr.push(result.column_kr[i]);
    }
    for (let i=0; i<tempArr_kr.length; i++)
    {
        for (let e=0; e<tempArr_kr.length; e++)
        {
            if ((tempArr_kr[e] == "이미지") || (tempArr_kr[e] == "이름") ||(tempArr_kr[e] == "가격")) continue ;
            
            if (
            (tempArr_kr[e] == "모델명" && i == 0) || (tempArr_kr[e] == "제조사" && i == 1) || (tempArr_kr[e] == "출시일" && i == 2) ||
            (tempArr_kr[e] != null && i >= 3)) 
            {
                tempArr_kr[e] = null
                temp.push(e)
                break;
            }
        }
    }
    Listcolumn_kr = new Array()
    Listcolumn = new Array()
    for (let i = 0 ; i < temp.length ; i++)
    {
        Listcolumn_kr.push(result.column_kr[temp[i]])
        Listcolumn.push(result.column[temp[i]])
    }
    let data = new Array()
    data.push(Listcolumn)
    data.push(Listcolumn_kr)
    return data
}