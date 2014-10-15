/**
 * Created by ruby on 2014/10/14.
 */
var express=require('express');
var router=express.Router();
var queryString=require('querystring');
var fs=require('fs');
var formidable=require('formidable');
var util=require('util');
var fs=require('fs');
router.use(function(req,res){
    req.encoding='utf-8';
    var form = new formidable.IncomingForm();
    form.encoding = 'utf-8';
    form.uploadDir = "./mydir";//这里用相对路径
    form.parse(req,function(err,fields,files){
        req.body=fields;
        req.files=files;
        res.end(util.inspect({fields: fields, files: files}));
        /*var target='./picture/'+files.picture.name;
        fs.renameSync(form.uploadDir, target,function(){
            console.log('successful');
        });*/
    });


})
exports.router=router;