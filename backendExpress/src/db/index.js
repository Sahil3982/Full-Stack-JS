import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const connectDB = async () => {
    try {
        const ConnectionInstances = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`\n MONGODB Connected !! DB_HOST:${ConnectionInstances.connection.host}`);
    } catch (error) {
        console.log("MONGODB Connection Error",error);
        process.exit(1);
    }
}

export default connectDB