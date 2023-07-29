const carRouter = require("express").Router();
const reviewRouter = require("./reviewRouter");
const CarController = require("../controllers/carController");
const CarMW = require("../middlewares/carMW");
// const carRouter = express.Router();

carRouter.post("/", CarController.createCar);
carRouter.get("/", CarController.getCars);
carRouter.get("/:carId", CarController.getCar);
carRouter.put("/:carId", CarController.updateCar);
carRouter.put("/:carId", CarController.updateCar2);
carRouter.delete("/:carId", CarController.deleteCar);
carRouter.delete("/carsv2/:carId", CarController.deleteCar);
carRouter.use("/:carId/reviews", CarMW.getCar, reviewRouter);
module.exports = carRouter;
