import express from 'express';
import session from 'express-session';
const app = express()
const PORT = 3000;
app.use(session({
    secret: 'my-secret-key',
    resave: false,
    saveUninitialized: false
  }));

app.get('/',(req,res)=>{
    req.session.username = "Programming Experience";
    res.send("Session are set");
});

app.get('/get-session',(req,res)=>{
    res.send("Your session user name is : " +req.session.username)
});


app.listen(PORT)









































// const express = require('express')
// const mongoose = require('mongoose');
// const url = 'mongodb://localhost:27017/mydatabase'
// const port = 4000;
// const app = express()
// mongoose.connect(url,{})
// .then( result => console.log("Databse connected successfully"))
// .catch(err=> console.log("Not connected"))


// app.get('/',(req,res)=>{
//     res.send("slash router");
// })
// app.get('/about',(req,res)=>{
//     res.send("<h1>This is About Page</h1>");
// })
// app.get('/login',(req,res)=>{
//     res.send("<h2>Login Page</h2>")
// })

// app.listen(port,()=> console.log( " Server running at:"+port))


