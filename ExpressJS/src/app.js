import express from "express";
const app = express();

app.get("/", (req, res, next) => {
  res.json({
    name : "sahil",
    message: "hello node",

  });
});

export default app;
