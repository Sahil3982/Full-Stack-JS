// mongodb://localhost:27017/my-database-name

import mongoose from 'mongoose'; 

const MONGODB_URI = 'mongodb://localhost27017/my-db'

mongoose.connect(MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology : true
})

const db = mongoose.connection;

