const express = require("express");
const carRouters = require("./carsRouter")
const router = express.Router();

router.use('/cars',carRouters)

module.exports = router;
