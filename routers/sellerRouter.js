const sellerRouter = require("express").Router();
const {getCar} = require("../middlewares/carMW")

const SellerController = require("../controllers/sellerController");

sellerRouter.post("/", SellerController.createSeller);
sellerRouter.get("/", SellerController.getSellers);
sellerRouter.get("/:sellerId", SellerController.getSeller);
sellerRouter.put("/:sellerId", SellerController.updateSeller);
sellerRouter.delete("/:sellerId", SellerController.deleteSeller);
sellerRouter.post(
  "/:sellerId/cars/:carId",
  getCar,
  SellerController.addCarsToSeller
);

module.exports = sellerRouter;
