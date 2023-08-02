const sellerRouter = require("express").Router();

const SellerController = require("../controllers/sellerController");

sellerRouter.post('/', SellerController.createSeller)
sellerRouter.get('/', SellerController.getSellers)
sellerRouter.get('/:sellerId', SellerController.getSeller)
sellerRouter.put('/:sellerId', SellerController.updateSeller)
sellerRouter.delete('/:sellerId', SellerController.deleteSeller)

module.exports = sellerRouter;
