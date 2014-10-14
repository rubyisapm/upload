/**
 * Created by ruby on 2014/10/14.
 */
var express=require('express');
var router=express.Router();
var queryString=require('querystring');
var fs=require('fs');
router.use(function(req,res){
    var receiveData='';
    req.on('data',function(data){
        receiveData+=data;
    })
    req.on('end',function(){
        var data=queryString.parse(receiveData);
        var picPath=data.picture;
/*        fs.readlink(picPath,function(error,linkString){
            console.log(linkString);
        })*/
        res.close();
    })
})
exports.router=router;