
$("document").ready(function()
{
    let CartList = new Array()
    let List_cpu = new Array()
    let List_cooler = new Array()
    let List_gpu = new Array()
    let List_memory = new Array()
    let List_mainboard = new Array()
    let List_power = new Array()
    let List_ssd = new Array()
    let List_hhd = new Array()
    let List_case = new Array()

    $(".esti").click(function()
    {
        let cart = $(this)
        let adr = $(this).attr("data-type")
        
        $.ajax
        ({
            url:"/api/product/"+adr, type:"get",
            success:function(result)
            {
                
                console.log(result.List)
                $(".info_area > table > tbody").html("")
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
                                    '<div class="detail_box"><span class="prod_name">' + result.List[i].name + '</span>' +
                                    '<span class="prod_detail">' + detail + '</span>' +
                                    '<span class="prod_price">가격 : ' + result.List[i].price + '</span>' +
                                    '<button class="prod_select" data-seq="'+i+'" >담기</button></div>' +
                                '</div>' +
                            '</td>' +
                        '</tr>'
                    $(".info_area > table > tbody").append(tag)
                }
                $(".prod_select").click(function()
                {
                    
                    let seq = $(this).attr("data-seq")
                    let data = -1

                    data = ("List_"+adr).indexOf(result.List[seq].seq)

                    if (data == -1)
                    {
                        $(this).html("해제");
                        eval("List_"+adr).push(result.List[seq])
                        let tag =
                            '<div class="cart_product_box">' +
                            result.List[seq].name +
                            result.List[seq].price + '원' +
                            '<button class="listcancel" data-seq="'+seq+'">X</button>' +
                            '</div>'
                        $("."+adr).append(tag)
                        console.log(eval("List_"+adr))

                    }
                    else
                    {
                        $(this).html("담기")
                        CartList["List_"+adr].splice(data,1)
                        $("."+adr).html("")
                        for (let i = 0 ; i < CartList["List_"+adr].length ; i++)
                        {
                            let tag =
                                '<div class="cart_product_box">' +
                                result.List[seq].name +
                                result.List[seq].price + '원' +
                                '<button class="listcancel" data-seq="'+seq+'">X</button>' +
                                '</div>'
                            $("."+adr).append(tag)
                        }
                    }

                })

            }
        })
    })
})

function addDataCart(result)
{
    
}

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