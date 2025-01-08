import dotenv from "dotenv"
import connectDB from "./db/index.js"
import {app} from "./app.js";
import cors from "cors"
import cookieParser from "cookie-parser"
dotenv.config({
  path: './env'
})
app.use(cors())

connectDB()
.then(
  app.listen(process.env.PORT || 8001 , ()=>{
    console.log(`Port is runing on ${process.env.PORT || 8001 } `);
    
  })
)
.catch((error) => {
  console.log("MONGODB Connection is Failed", error);
  
})