import express from 'express';
import dbConnection from './src/db/db.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static('public'));
app.use(cookieParser());

dbConnection()



app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
