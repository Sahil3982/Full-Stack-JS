import mongoose from 'mongoose';
//define the mongodb connection URL
const mongoURL = 'mongodb://localhost:27017/hotels'

//setup mongodb connection

mongoose.connect(mongoURL ,{
 useNewUrlParse : true,
 useUnifiedTopology : true
})

//Get the default connection mongodb , Mongoose maintains a default connection object represnting the mongodb connection.

const db = mongoURL.connection;

//Define events listeners for database connection 

db.on('connection', ()=>{
    console.log("Database Connection Sucessfully!");
})

db.on('Disconnected', ()=>{
    console.log("Database disconnected");
})
db.on('error' , ()=>{
    console.log("It Phsases Any Error During Establishing connection");
})