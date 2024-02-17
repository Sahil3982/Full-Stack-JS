const express = require('express')
const app = express();

app.get('/',(req,res)=>{
    res.send("Heelo")
})

app.listen(port,()=> console.log(port))
