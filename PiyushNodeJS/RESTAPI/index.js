import express from "express";
import userData from "./data.js";
import mongoose from "mongoose";

const port = 2000;
const app = express();
app.use(express.json());

// Mongodb connection 

mongoose.connect('mongodb://127.0.0.1:27017/piyush').then(() => {
  console.log("Connected Successfully");
}).catch((error) => {
  console.log("Got Error", error);
})


// Uncomment these middlewares if you need them for debugging or specific processing
// app.use((req, res, next) => {
//   console.log("Middleware 1st");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("Middleware 2nd");
//   return res.json({ message: "Route 1" });
//   next();
// });


// Schema in Mongodb








// .patch((req, res) => {
//   console.log("PATCH Request");
//   // Add your patch logic here
// })
// .delete((req, res) => {
//   console.log("Delete Request");
//   // Add your delete logic here
// });

app.listen(port, () => {
  console.log(`Running on ${port}`);
});
