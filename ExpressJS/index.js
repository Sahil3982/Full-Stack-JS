const express = require('express')
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/mydatabase'
const port = 4000;
const app = express()
mongoose.connect(url,{})
.then( result => console.log("Databse connected successfully"))
.catch(err=> console.log("Not connected"))


app.get('/',(req,res)=>{
    res.send("slash router");
})
app.get('/about',(req,res)=>{
    res.send("<h1>This is About Page</h1>");
})
app.get('/login',(req,res)=>{
    res.send("<h2>Login Page</h2>")
})

app.listen(port,()=> console.log( " Server running at:"+port))


