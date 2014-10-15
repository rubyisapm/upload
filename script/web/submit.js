/**
 * Created by ruby on 2014/10/14.
 */
function readfile(f){
    var reader=new FileReader();
    reader.readAsBinaryString(f);
    reader.onload=function(){
        var text=reader.result;
        return text;
    }
    reader.onerror=function(e){
        console.log(e);
    }
}
document.querySelector("#submit").onclick=function(){

    var request=new XMLHttpRequest();
    request.open('POST','/submit');
    request.onreadystatechange=function(){
        if(request.readyState===4){
            console.log(request.responseText);
        }
    }
    var formData=new FormData();
    /*var param={
        name:document.querySelector('#name').value,
        picture:document.querySelector('#picture').files[0]
    }*/
    /*console.log(formData);
    for(var name in param){
        if(!param.hasOwnProperty(name)) continue;
        var value=param[name];
        if(typeof value ==='function') continue;
        console.log(value);
        formData.append(name,value);
        console.log(formData);
    }*/
    formData.append('picture',document.querySelector('#picture').files[0]);
    console.log(document.querySelector('#picture').files[0]);
    request.send(formData);
    /*$.ajax({
        url:'/submit',
        type:'POST',
        async:false,
        data:formData,
        contentType:'multipart/form-data',
        success:function(data){
            console.log(data);
        },
        error:function(){
            console.log('error!');
        }
    })*/
    //readfile(document.querySelector('#picture').files[0]);

}