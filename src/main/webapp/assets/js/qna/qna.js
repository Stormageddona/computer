$(function(){
    let query = window.location.search;
    let param = new URLSearchParams(query);
    let page = param.get('page');
    let keyword = param.get('keyword');
    if(page == null || page == undefined) page =1;
    if(keyword == null || keyword == undefined) keyword="";
    $.ajax({
        url:"/api/qna/list?keyword="+keyword+"&page="+page,
        type:"get",
        success:function(result){
            // console.log(result);
            $(".qna_list").html("")
            for(let i=0; i<result.list.length; i++) {
                let tag= '';
                if(result.list[i].qsi_seq == result.list[i].asi_qsi_seq){
                    tag+=
                        '<tr class="question_tr" data-seq="'+result.list[i].qsi_seq+'">' +
                            '<td>'+ result.list[i].qsi_seq+'</td>' +
                            '<td>'+ result.list[i].qsi_aci_seq+'</td>' +
                            '<td><a href="/qna/detail?seq='+result.list[i].qsi_seq+'"&>'+ result.list[i].qsi_title+'</a></td>' +
                            '<td>'+ makeDateString(new Date(result.list[i].qsi_reg_dt))+'</td>' +
                        '<tr>'+
                        '<tr>' +
                            '<td><i class="fa-solid fa-arrow-turn-down-right"></i></td>' +
                            '<td>'+ result.list[i].asi_aci_seq+'</td>' +
                            '<td><a href="/qna/detail?seq='+result.list[i].qsi_seq+'"&>'+ result.list[i].asi_title+'</a></td>' +
                            '<td>'+ makeDateString(new Date(result.list[i].asi_reg_dt))+'</td>' +
                        '<tr>';
                } else {
                    tag+=
                    '<tr class="question_tr" data-seq="'+result.list[i].qsi_seq+'">' +
                        '<td>'+ result.list[i].qsi_seq+'</td>' +
                        '<td>'+ result.list[i].qsi_aci_seq+'</td>' +
                        '<td><a href="/qna/detail?seq='+result.list[i].qsi_seq+'"&>'+ result.list[i].qsi_title+'</a></td>' +
                        '<td>'+ makeDateString(new Date(result.list[i].qsi_reg_dt))+'</td>' +
                    '<tr>';
                }
                $(".qna_list").append(tag)
            }
            $(".question_tr").click(function(){
                $.ajax({
                    url:"/api/qna/detail?seq="+$(this).attr("data-seq"),
                    type:"get",
                    success:function(result){
                        // console.log(result);
                    }
                })
            })
        }
    })
})