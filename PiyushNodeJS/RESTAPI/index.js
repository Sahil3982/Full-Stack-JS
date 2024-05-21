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

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  gender: {
    type: String,
    required: true
  }
})

// models in mondodb

const User = mongoose.model("user", userSchema)





app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/api/user", (req, res) => {
  res.json(userData);
});

app.get("/user", (req, res) => {
  const html = `
    <ul>
      ${userData.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
  `;
  return res.send(html);
});

app.get("/api/user/:id", (req, res) => {
  const id = Number(req.params.id);
  console.log(id);

  const user = userData.find((user) => id === user.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

app
  .route("/api/user")
  .post(async (req, res) => {
    const body = req.body;
    console.log('Received new user data:', body);

    // You can add logic to save the new user data to your database here
    // For example, you could push the new user to the userData array

    // res.status(201).json({ message: 'User created successfully', user: newUser });

    const result = await User.create({
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      gender: body.gender
    })

    console.log('Result', result);

    return res.status(201).json({ msg: "success" })
  })
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
