/**
 * Created by ruby on 2014/9/24.
 */
var express=require('express');
var app=express();
var ejs=require('ejs');
app.set('view engine',ejs);

app.use('/test',require("./script/router/test.js").router);
app.listen(3000);







