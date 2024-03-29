import express from 'express'
const app = express();
console.log(app);
app.get('/home',(req,res)=>{
    res.send("Hello")
})
app.put('/about',(req,res)=>{
res.send("put")
})

app.listen(3000)