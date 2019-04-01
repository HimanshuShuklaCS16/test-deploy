var express=require('express');
var app=express();
const port =3001;
app.get('/',function(req,res){
    res.send('hello world')
})
app.listen(3001)