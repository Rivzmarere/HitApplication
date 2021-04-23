const express = require('express');
const PaymentController = require('../controllers/PaymentController');
let router = express.Router() 

router.post("/add-payment", PaymentController.getAllPayments);
 
router.post("/add-payments", PaymentController.getAllPayments);

 router.get("/get-payment-by-id", PaymentController.getPaymentById);

module.exports = router;