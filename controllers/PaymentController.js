var Payment = require('../model/payment');

module.exports={
  
  // Get All Products
  getAllPayments: (req,res)=>{
        var Payment = Parse.Object.extend("Payments");
        var query = new Parse.Query(Payment);
    
        query
        .find()
        .then(payments=>{
          res.json({success: payments}).status(200);
        },error =>{
          res.json(error).status(400);
        });
  },
       
  // Get Payment By Id
  getPaymentById: (req,res)=>{
    const Payments = Parse.Object.extend('Payments');
    const query = new Parse.Query(Payments)
    
    const payment_id = req.query.id;
    query.equalTo("payment_id", payment_id);

    console.log(payment_id); 

    query.find()
    .then(payments =>{
      res.json({success: true, payments}).status(200);
    }, error => {
      res.json({success: false, payments: [],...error}).status(400);
    })
  }
 
}