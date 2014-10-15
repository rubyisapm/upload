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
            document.querySelector('a').setAttribute("href",request.responseText);
            document.querySelector('a').innerHTML=request.responseText;
        }
    }
    var formData=new FormData();
    formData.append('picture',document.querySelector('#picture').files[0]);
    request.send(formData);
}