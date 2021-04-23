const express = require('express');
const CanteenController = require('../controllers/CanteenController');
let router = express.Router();



router.post("/add-product", CanteenController.postProducts);

router.get("/view-product", CanteenController.getAllProducts);

router.get("/get-product-by-id", CanteenController.getProductById);

router.put("/update-product/:id", CanteenController.putByProductId);


module.exports = router;