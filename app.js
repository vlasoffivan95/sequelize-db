const express = require("express");

const app = express();

app.use(express.json());

app.get(
  "/users",
  async (req, res, next) => {
    console.log("Middleware xuzpit");
    next();
  },
  async (req, res, next) => {
    res.send("hello from users");
  }
);

app.post("/users", async (req, res, next) => {
  const { body } = req;
  res.send(body);
});

app.use(async (err, req, res, next) => {
  res.send("Error!");
});

module.exports = app;
