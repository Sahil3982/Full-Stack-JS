const express = require('express')
const user = require('./data.json')
const app = express()
require('dotenv').config()

app.get('/user', (req, res) => {
    return res.json(user)

})

app.get('/user/name', (req, res) => {
    return res.json({
        id: 3
    })
})

app.post('/addtodo',(req,res)=>{

})

app.listen(process.env.PORT, () => console.log(`Server is running on ${process.env.PORT}`))