/**
 * Created by ruby on 2014/10/14.
 */
var express=require('express');
var router=express.Router();
var queryString=require('querystring');
var fs=require('fs');
var formidable=require('formidable');
router.use(function(req,res){


    var form = new formidable.IncomingForm();
    var post = {},
        file = {};
    form.uploadDir = '/tmp';

    form.on('error', function(err) {
            console.log(err);
        }).on('field', function(field, value) {
            if (form.type == 'multipart') {
                if (field in post) {
                    if (util.isArray(post[field]) === false) {
                        post[field] = [post[field]];
                    }
                    post[field].push(value);
                    return;
                }
            }
            post[field] = value;
        }).on('file', function(field, file) {
            file[field] = file;
        }).on('end', function() {
            console.log('ok');
        });
    form.parse(req,function(err,fields,files){
        req.body=fields;
        req.files=files;
        console.log(req.body);
    });
})
exports.router=router;