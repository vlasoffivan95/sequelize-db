const express = require("express");
const carRouters = require("./carsRouter");
const router = express.Router();
const sellerRouter = require("./sellerRouter");

router.use("/cars", carRouters);
router.use("/sellers", sellerRouter);

module.exports = router;
