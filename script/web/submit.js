/**
 * Created by ruby on 2014/10/14.
 */
$("#submit").click(function(){
    var param={
        name:$('#name').val(),
        picture:$('#picture').val()
    }
    $.ajax({
        url:'/submit',
        type:'POST',
        async:false,
        data:param,
        contentType:'multipart/form-data',
        success:function(data){
            console.log(data);
        },
        error:function(){
            console.log('error!');
        }
    })
})