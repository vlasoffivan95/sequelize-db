const express = require("express");
const CarController = require("../controllers/carController");
const router = express.Router();

router.post("/cars", CarController.createCar);
router.get("/cars", CarController.getCars)
router.get("/cars/:carId", CarController.getCar)
router.put("/cars/:carId", CarController.updateCar)
router.put("/carsv2/:carId", CarController.updateCar2)
router.delete("/cars/:carId", CarController.deleteCar)
router.delete("/carsv2/:carId", CarController.deleteCar)

module.exports = router;
