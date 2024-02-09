const express = require('express')
const app = express();
const db = require('./db')

app.get('/', function(req,res){
    res.send("Hello World");

})

// app.get('/Home', (req,res)=>{
//     const obj = {
//         name:"sahil",
//         age: 18,
//         rollno: 45
//     }
//     res.send(obj);
// })

// app.get('/About',(req,res)=>{
//     res.send("This is About Page");
// })
app.listen(3001);