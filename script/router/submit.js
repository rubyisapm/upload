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
    form.uploadDir = "./mydir";
    form.parse(req,function(err,fields,files){
        req.body=fields;
        req.files=files;
        fs.readFile(files.picture.path,function(err,data){
            fs.writeFile("uploads/"+files.picture.name, data, function (err) {
                if (err) throw err;
                res.send("http://localhost:3000/uploads/"+files.picture.name);
            });
        })

    });
})
exports.router=router;