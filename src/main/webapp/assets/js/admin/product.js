$(function()
{
    $.ajax
    ({
        url:"/api/admin/product/list?type="+type,
        type:"get",
        success:function(result)
        {
            
        }
    })
})