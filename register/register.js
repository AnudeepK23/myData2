var express = require('express')



var app=express();

app.get('/sub',(req,res)=>{
    var name= req.query.name;
    var age= req.query.age;
    var dob=req.query.dob;
    res.send(`<h1> Welcome ${name} your age is ${age} your dob is ${dob}</h1>`)

})

app.listen(1234,()=>{
    console.log('Connected.......!')
})