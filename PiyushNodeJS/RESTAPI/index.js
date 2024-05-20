import express from 'express'
import userData from './data.js'

const port = 2000 ;
const app = express();

app.get('/',(req,res)=>{
    res.send("Hello")
})

app.get('/user',(req,res)=>{
    res.json(userData)
})

app.listen(port,()=>{
    console.log(`Running on ${port}`);
})
