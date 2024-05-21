import express from "express";
import userData from "./data.js";

const port = 2000;
const app = express();
app.use(express.json());

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
  .post((req, res) => {
    const newUser = req.body;
    console.log('Received new user data:', newUser);
    
    // You can add logic to save the new user data to your database here
    // For example, you could push the new user to the userData array
    
    // res.status(201).json({ message: 'User created successfully', user: newUser });
  })
  .patch((req, res) => {
    console.log("PATCH Request");
    // Add your patch logic here
  })
  .delete((req, res) => {
    console.log("Delete Request");
    // Add your delete logic here
  });

app.listen(port, () => {
  console.log(`Running on ${port}`);
});
