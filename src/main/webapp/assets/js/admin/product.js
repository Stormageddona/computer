// 검색어 갱신종료 시간
const TIMED_OUT = 350 ;

let prod = null ;
let page = null ;
let keyword = null ;
let desc = false ;
let search = null ;
let ordertype = null ;
let column_kr = new Array();
let column = new Array();
let Listcolumn_kr = new Array()
let Listcolumn = new Array()
let img_file = null ;

$(function()
{
    $(".modify_area").hide()
    $(".add_area").hide()
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
                
                // console.log(result.column)
                // console.log(result.column_kr)

                getcolumnData(result)
                for (let i=0; i < Listcolumn_kr.length ; i++)
                {
                    if (Listcolumn_kr[i] == "번호" || Listcolumn_kr[i] == "등록일") continue ;
                    if (Listcolumn_kr[i] == "이미지") 
                    {
                        let tag = 
                        '<div class="img_area"></div>' +
                        Listcolumn_kr[i] + 
                        '<form class="img_form" hidden>'+
                            '<input type="file" id="input_image" name="file" accept="image/gif,image/jpeg,image/png" onchange="imgupload($(this))">'+
                        '</form>'+
                        '<button class="add_image" onclick="document.getElementById(\'input_image\').click()"><i class="fas fa-image"></i></button><br>';
                        $(".add_box").append(tag)
                        continue ;
                    }
                    let tag = '<span>' + Listcolumn_kr[i] + '</span><input type="text" class="'+ Listcolumn[i] +'"><br>'
                    $(".add_box").append(tag)
                }
                console.log(Listcolumn_kr)
                
            })
            $(".add_submit").click(function()
            {
                if (!confirm("제품을 등록 하시겠습니까?")) return ;
                let data = {} ;   
                for (let i = 0 ; i < Listcolumn.length ; i++)
                {
                    data[Listcolumn[i]] = $("."+[Listcolumn[i]]).val()
                }
                $.ajax
                ({
                    url:"/api/admin/product/"+prod+"?img="+img_file , contentType:"application/json", 
                    data:JSON.stringify(data), type:"put",
                    success:function(result)
                    {
                        alert(result.message);
                        location.reload();
                    }
                })
            })
            $(".modify_submit").click(function()
            {
                if (!confirm("제품을 수정 하시겠습니까?")) return ;
                let data = {} ;   
                for (let i = 0 ; i < Listcolumn.length ; i++)
                {
                    data[Listcolumn[i]] = $("."+[Listcolumn[i]]).val()
                }
                $.ajax
                ({
                    url:"/api/admin/product/"+prod+"?seq="+$(this).attr("data-seq") , contentType:"application/json", 
                    data:JSON.stringify(data), type:"patch",
                    success:function(result)
                    {
                        alert(result.message);
                        location.reload();
                    }
                })
            })
        }
    })
    

    // function

    // data.done(function(result)
    // {

    // })


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

function imgupload(data, type)
{
    let form = $(".img_form");
    let formData = new FormData(form[0]) ;
    if (data.val() == '' || data.val() == null) return;
    data.val("") ;
    $.ajax
    ({
        url:"/image/upload/"+type+"?temp=true",
        type:"put",
        data:formData,
        contentType:false,
        processData:false,
        success:function(result) 
        {
            if(!result.status)
            {
                alert(result.message);
                return;
            }
            if (img_file != null) $.ajax({url:"/image/delete"+img_file, type:"delete"})

            let tag = '<div class="board_img" filename="' + result.file + '" style="background-image:url(/images'+result.file+'?temp=true)">'+
            '<button onClick=deleteImg("'+result.file+'")>&times;</button>'+
            '</div>';
            console.log(result)
            img_file = result.file ;
            $(".img_area").html(tag) ;
        }
    })
}


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
            if ((tempArr_kr[e] == "이미지" && i == 0) || (tempArr_kr[e] == "이름" && i == 1) ||
            (tempArr_kr[e] == "모델명" && i == 2) || (tempArr_kr[e] == "출고가" && i == 3) ||
            (tempArr_kr[e] == "제조사" && i == 4) || (tempArr_kr[e] == "출시일" && i == 5) ||
            (tempArr_kr[e] != null && i >= 6)) 
            {
                tempArr_kr[e] = null
                temp.push(e)
                // tempArr_kr.splice(e,1)
                break;
            }
        }
        // temp.push(e)
        // console.log(e)
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
                    '<td><button class="modify_btn" data-seq="'+result.List[i].seq+'" >수정</td>' +
                    '<td><button class="delete_btn" onClick=deleteProduct(' + result.List[i].seq + ')>삭제</td>' +
                '</tr>'
                $(".product_table tbody").append(tag)
            }

            //제품 수정
            $(".modify_btn").click(async function()
            {
                let data =  getcolumnData(result)
                let Listcolumn_kr = data[1]
                let Listcolumn = data[0]
                let seq = $(this).attr("data-seq") ;
                $(".modify_submit").attr("data-seq",seq) ;
                $.ajax
                ({
                    url:"/api/admin/product/"+prod+"?seq="+seq,type:"get",
                    success:function(r)
                    {
                        $(".modify_box").html("")
                        for (let i=0; i < Listcolumn_kr.length ; i++)
                        {
                            if (Listcolumn_kr[i] == "번호" || Listcolumn_kr[i] == "등록일") continue ;
                            if (Listcolumn_kr[i] == "이미지") 
                            {
                                let tag = 
                                '<div class="img_area"></div>' +
                                Listcolumn_kr[i] + 
                                '<form class="img_form" hidden>'+
                                    '<input type="file" id="input_image" name="file" accept="image/gif,image/jpeg,image/png" onchange="imgupload($(this))">'+
                                '</form>'+
                                '<button class="add_image" onclick="document.getElementById(\'input_image\').click()"><i class="fas fa-image"></i></button><br>';
                                $(".modify_box").append(tag)
                                continue ;
                            }
                            let tag = '<span>' + Listcolumn_kr[i] + '</span><input type="text" class="'+ Listcolumn[i] +'" value="'+ r[Listcolumn[i]] +'"><br>' ;
                            
                            
                            $(".modify_box").append(tag)
                        }
                        $(".modify_area").show()
                    } 
                })
            })
        }
    })
}


function deleteImg(filename)
{
    if (!confirm("이미지를 지우시겠습니까? 지운후에는 복구할수 없습니다.")) return ;

    
    $.ajax  
    ({
        url:"/image/delete"+filename, type:"delete"
    })
}

function orderProductAdd(result)
{
    if (result == "번호" || result == "등록일") return ;
    if (result == "이미지") 
    {
        let tag = 
        result + 
        '<form class="img_form" hidden>'+
            '<input type="file" id="input_image" name="file" accept="image/gif,image/jpeg,image/png">'+
        '</form>'+
        '<button class="add_image" onclick="document.getElementById(\'input_image\').click()"><i class="fas fa-image"></i></button><br>';
        $(".add_box").append(tag)
    }
    let tag = '<span>' + result + '</span><input type="text" class="'+ result +'"><br>'
    $(".add_box").append(tag)


}                


                // let a = 0 ;
                // for (let e = 0 ; e < result.column_kr.length ; e++)
                // {
                //     for (let i = 0 ; i < result.column_kr.length ; i++)
                //     {
                //         a++
                //         console.log(a)
                //         console.log(e, result.column_kr.length, i, result.column_kr.length)
                //         // if (true)
                //         // {
                //             // result.column_kr[i] = null && result.column_kr[i] == "이미지"
                //             // orderProductAdd(result.column_kr[i]) ;
                //         // }
                //         // if (e = 1 && result.column[i] == "name")
                //         // {
                //         //     result.column_kr[i] = null

                //         //     orderProductAdd(result.column_kr[i]) ;
                //         //     break ;
                //         // }
                //         // if (e = 2 && result.column[i] == "model_name")
                //         // {
                //         //     result.column_kr[i] = null

                //         //     orderProductAdd(result.column_kr[i]) ;
                //         //     break ;
                //         // }
                //         // if (e = 3 && result.column_kr[i] == "가격")
                //         // {
                //         //     result.column_kr[i] = null

                //         //     orderProductAdd(result.column_kr[i]) ;
                //         //     break ;
                //         // }
                //         // if (e = 4 && result.column_kr[i] == "제조사")
                //         // {
                //         //     result.column_kr[i] = null

                //         //     orderProductAdd(result.column_kr[i]) ;
                //         //     break ;
                //         // }
                //         // if (e = 5 && result.column_kr[i] == "출시일")
                //         // {
                //         //     result.column_kr[i] = null

                //         //     orderProductAdd(result.column_kr[i]) ;
                //         //     break ;
                //         // }
                //         // if (e > 5 && result.column_kr[i] != null){
                //         //     orderProductAdd(result.column_kr[i]) ;
                //         //     break;
                //         // }
                //     }
                // }

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

// // commonColumns 컬럼 모두 걸러내기
// for(let i=0; i<commonColumns.length; i++) {
//     if (tempArr_kr.filter((data) => data != commonColumns[i]))
//     {
//         console.log(tempArr_kr.splice(i,1))
//         tempArr_kr.splice(i,1)
//         tempArr.splice(i,1)
//         temp.push(i)
//     }
// }
// console.log(tempArr_kr)
// // 공통컬럼을 먼저 추가하고
// for(let i=0; i<commonColumns.length; i++) {
//     column_kr.push(commonColumns[i]);
//     column.push(result.column[temp[i]]);
// }
// // 나머지컬럼을 추가
// for(let i=0; i<tempArr.length; i++) {
//     column_kr.push(tempArr_kr[i]);
//     column.push(tempArr[i]);
// }
// // console.log(column_kr.length)
// // console.log(column_kr)
// // console.log(column)