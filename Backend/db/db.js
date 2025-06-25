import mongoose from 'mongoose';
const mongoURL = 'mongodb://localhost:27017/auth'

const dbConnection = () => {

    try {
        mongoose.connect(mongoURL).then(() => {
            console.log('Database connected successfully');
        }).catch((error) => {
            console.error('Database connection failed:', error);

        })
    } catch (error) {
        console.log(error);

    }



}

export default dbConnection;