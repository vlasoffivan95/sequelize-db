const carRouter = require("express").Router();
const path = require("path");
const reviewRouter = require("./reviewRouter");
const CarController = require("../controllers/carController");
const CarMW = require("../middlewares/carMW");
const multer = require("multer");

// const carRouter = express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, "../public/images"));
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()} - ${file.originalname}`);
  },
});
const upload = multer({ storage });

carRouter.post("/", CarController.createCar);
carRouter.get("/", CarController.getCars);
carRouter.get("/:carId", CarController.getCar);
carRouter.put("/:carId", CarController.updateCar);
carRouter.post("/:carId/pic", upload.single("pic"), CarController.addPicToCar);
carRouter.put("/:carId", CarController.updateCar2);
carRouter.delete("/:carId", CarController.deleteCar);
carRouter.delete("/carsv2/:carId", CarController.deleteCar);
carRouter.use("/:carId/reviews", CarMW.getCar, reviewRouter);
module.exports = carRouter;
