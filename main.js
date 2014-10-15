/**
 * Created by ruby on 2014/9/24.
 */
var express=require('express');
var app=express();
var ejs=require('ejs');
app.set('view engine','ejs');
app.use('/script',express.static(__dirname + '/script'));
app.use('/uploads',express.static(__dirname + '/uploads'));
app.use('/test',require("./script/router/test.js").router);
app.use('/index',require('./script/router/index.js').router);
app.post('/submit',require('./script/router/submit.js').router);
app.listen(3000);







