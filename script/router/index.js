/**
 * Created by ruby on 2014/10/14.
 */
var express=require('express');
var router=express.Router();
router.use(function(req,res){
    res.render('index.ejs');
    res.end();
})
exports.router=router;
