import express from "express";
import userData from "./data.js";

const port = 2000;
const app = express();

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

  const html2 = userData.find((user) => id === user.id);
  res.json(html2);
});

app
  .route("/api/user/:id")
  .post((req, res) => {
    console.log("POST Request");
  })
  .patch((req, res) => {
    console.log("PATCH Request");
  })
  .delete((req, res) => {
    console.log("Delete Request");
  });

app.listen(port, () => {
  console.log(`Running on ${port}`);
});
