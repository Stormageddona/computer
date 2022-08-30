let CartList = new Array()
$("document").ready(function()
{
    if (user_seq != null && user_seq != undefined && user_seq != "")
    {
        $.ajax
        ({
            url:"/api/account/cart" , type:"get",
            success:function(result)
            {
                CartList = result.CartList
                listreload()
            }
        })
    }


    
    $(".esti").click(function()
    {
        GetList($(this).attr("data-type"))
    })
    $(".cart_save").click(function()
    {
        if (!confirm("견적정보를 저장하시겠습니까?")) return ;
        $.ajax
        ({
            url:"/api/account/cart", type:"put", data:JSON.stringify(CartList), contentType:"application/json",
            success:function(result)
            {
                alert(result.message)
            }
        })
        
    })
    $(".cart_delete").click(function()
    {
        if (!confirm("견적정보를 삭제하시겠습니까?")) return ;
        $.ajax
        ({
            url:"/api/account/cart", type:"delete",
            success:function(result)
            {
                alert(result.message)
                // location.reload()
            }
        })
    })
})

function GetList(adr,page = null)
{
    let cart = $(this)
    $.ajax
    ({
        url:"/api/product/"+adr+"?page="+page, type:"get",
        success:function(result)
        {
            
            // console.log(result.List)
            $(".info_area > table > tbody").html("")
            let column = getcolumnData(result)
            // console.log(column)
            for (let i = 0 ; i < result.List.length ; i++)
            {
                let detail = "" ;
                for (let j = 0 ; j < column[1].length;j++)
                {
                    detail = detail + column[1][j] + ":" + result.List[i][column[0][j]] + " / "
                }
                let str = "담기"
                for (let e = 0 ; e < CartList.length ; e++)
                {
                    if (CartList[e].ci_seq == result.List[i].seq && CartList[e].ci_table == adr) str = "해제"
                }
                let tag = 
                    '<tr>' +
                        '<td>' +
                            '<div class="product_box">' +
                                '<div class="img_box" style="background-image: url(/image'+result.List[i].img_src+');"></div>' +
                                '<div class="detail_box"><span class="prod_name">' + result.List[i].name + '</span>' +
                                '<span class="prod_detail">' + detail + '</span>' +
                                '<span class="prod_price">가격 : ' + result.List[i].price.toLocaleString() + '원</span>' +
                                '<button class="prod_select" data-seq="'+i+'" >'+str+'</button></div>' +
                            '</div>' +
                        '</td>' +
                    '</tr>'
                $(".info_area > table > tbody").append(tag)
            }
            $(".pager_area").html("")
            for (let i = 0; i < result.ListCnt ; i++)
            {
                $(".pager_area").append('<button onclick="pagerclick('+i+',\''+adr+'\')">'+(i+1)+'</button>')
            }
            $(".prod_select").click(function()
            {
                
                let seq = $(this).attr("data-seq")
                let temp = 
                {
                    ci_seq:result.List[seq].seq,
                    ci_table:adr, 
                    ci_name:result.List[seq].name, 
                    ci_price:result.List[seq].price, 
                    ci_count:1
                }
                let data = -1
                for (let i = 0 ; i < CartList.length ; i++)
                {
                    if (CartList[i].ci_seq == result.List[seq].seq && CartList[i].ci_table == adr) data = i
                }
                // data = eval("List_"+adr).findIndex(result.List[seq])

                if (data == -1)
                {
                    $(this).html("해제");

                    let i = CartList.push(temp)-1
                    listreload()
                    // console.log(CartList)
                    // console.log(i)
                    // console.log(CartList[i])
                    // let tag =
                    //     '<div class="cart_product_box">' +
                    //     CartList[i].name +
                    //     (CartList[i].price*CartList[i].count) + '원' +
                    //     '<button onclick="listreload('+i+')">X</button>' +
                    //     '<input type="number" class="count_input_'+i+'" value="'+CartList[i].count+'"><button onclick="count_up('+i+')">∧</button><button onclick="count_down('+i+')">∨</button>' +
                    //     '</div>'
                    // $("."+adr).append(tag)
                }
                else
                {
                    $(this).html("담기")
                    // CartList.splice(data,1)
                    listreload(data)
                    // tableinit()
                    // for (let i = 0 ; i < CartList.length ; i++)
                    // {
                    //     // if (CartList[i].table != $(this).attr("data-type")) continue ;
                    //     let tag =
                    //         '<div class="cart_product_box">' +
                    //         CartList[i].name +
                    //         (CartList[i].price*CartList[i].count) + '원' +
                    //         '<button onclick="listreload('+i+')">X</button>' +
                    //         '<input type="number" class="count_input_'+i+'" value="'+CartList[i].count+'"><button onclick="count_up('+i+')">∧</button><button onclick="count_down('+i+')">∨</button>' +
                    //         '</div>'
                    //     $("."+CartList[i].table).append(tag)
                    // }
                }

            })
        }
    })
}

function pagerclick(i,adr)
{
    GetList(adr,i)
}
function count_up(i)
{
    $(".count_input_"+i).val(parseInt(CartList[i].ci_count)+1)
    CartList[i].ci_count = $(".count_input_"+i).val()
    listreload()
}
function count_down(i)
{
    if ($(".count_input_"+i).val() > 1)
    {
        $(".count_input_"+i).val(parseInt(CartList[i].ci_count)-1)
        CartList[i].ci_count = $(".count_input_"+i).val()
    }
    listreload()
}

function listreload(seq = null)
{
    if (seq != null) 
    {
        CartList.splice(seq,1)
    }
    tableinit()
    let total_price = 0 ;
    for (let i = 0 ; i < CartList.length ; i++)
    {
        let tag =
            '<div class="cart_product_box">' +
            CartList[i].ci_name +'<br>' +
            (CartList[i].ci_price*CartList[i].ci_count).toLocaleString()+ '원' +
            '<button onclick="listreload('+i+')">X</button>' +
            '<input type="number" class="count_input_'+i+'" value="'+CartList[i].ci_count+'"><button onclick="count_up('+i+')">∧</button><button onclick="count_down('+i+')">∨</button>' +
            '</div>'
        $("."+CartList[i].ci_table).append(tag)
        total_price += CartList[i].ci_price*CartList[i].ci_count
    }
    $(".total_price").html( total_price.toLocaleString()+"원")
}


function tableinit()
{
    $(".cpu").html("")
    $(".cooler").html("")
    $(".gpu").html("")
    $(".memory").html("")
    $(".mainboard").html("")
    $(".power").html("")
    $(".ssd").html("")
    $(".hdd").html("")
    $(".case").html("")
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