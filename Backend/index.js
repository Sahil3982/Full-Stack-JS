import express from 'express';
import dbConnection from './db/db.js';
const app = express();
const PORT = process.env.PORT || 3000; 

dbConnection()



app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    
});
