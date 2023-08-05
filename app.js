const express = require("express");
const { Car } = require("./models");
const router = require("./routers");
const { basicErrorHandler } = require("./errorHandlers");
const { sequelizeErrorHandler } = require("./errorHandlers/sequelizeError");

const app = express();

app.use(express.json());
app.use(router);
app.use(sequelizeErrorHandler);
app.use(basicErrorHandler);
app.use(express.static('public'))

module.exports = app;
