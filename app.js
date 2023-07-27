const express = require("express");
const { Car } = require("./models");
const router = require("./routers")

const app = express();

app.use(express.json());
app.use(router)




module.exports = app;
