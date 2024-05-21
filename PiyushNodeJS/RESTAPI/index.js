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
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  gender: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);


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

app.post("/api/user", async (req, res) => {
  try {
    const { first_name, last_name, email, gender } = req.body;

    // Check for required fields
    if (!first_name || !last_name || !email || !gender) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create new user
    const newUser = new User({ first_name, last_name, email, gender });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    // Handle validation errors
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: error.message, errors: error.errors });
    }
    // Handle other errors
    res.status(500).json({ message: 'Internal Server Error' });
  }
});



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
