const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    
  res.send({
    name: "sahil",
    age: 32,
    address : "Gabaraha kanpur nagar 209203"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})