const mongoose = require('mongoose');

mongoose.connect(' mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.0')
const db = mongoose.connection;

db.on('connected',()=>{
    console.log("Connected Successfully");
})
db.on('error',()=>{
    console.log("Error occures");
})
db.on('disconnected',()=>{
    console.log("Disconnected database");
})


module.exports=db;