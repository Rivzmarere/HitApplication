var canteen = require('../model/canteen')

module.exports={
  
  // Get All Products
  getAllProducts: (req,res)=>{
        var Products = Parse.Object.extend("Product");
        var query = new Parse.Query(Products);
    
        query
        .find()
        .then(products=>{
          res.json({success: products}).status(200);
        },error =>{
          res.json(error).status(400);
        });
  },
    
  // Add new Product
  postProducts: (req, res) => {
    var Products = Parse.Object.extend("Product"); // 
    var product = new Products(); //
    
    let data = req.body;
    data.company_id = (Math.floor(Math.random()*(100000-1)+1)).toString();

    product.save({
      ...data
    })
    .then((result) => {
      // The object was saved successfully.
      res.json({success: true, result}).status(201);
    }, (error) => {
      res.json({success: false, ...error}).status(400);
    });
  },
    
  // Get Product By Id
  getProductById: (req,res)=>{
    const Products = Parse.Object.extend('Product');
    const query = new Parse.Query(Products)
    
    const product_id = req.query.product_id;
    query.equalTo("product_id", product_id);

    console.log(product_id); 

    query.find()
    .then(products =>{
      res.json({success: true, products}).status(200);
    }, error => {
      res.json({success: false, products: [],...error}).status(400);
    })
  },

  //Get Product
  getProductByName: (req,res)=>{
    const Products = Parse.Object.extend('Product');
    const query = new Parse.Query(Products);
    query.equalTo(req.body);
    const results = query.find()
    .then(products =>{
      res.json({success: true, products}).status(200);
    }, error => {
        res.json({success: false, products: [],...error}).status(400);
    });
  },

  //Edit Product Price
  putByProductId: async (req,res) =>{
    var Product =Parse.Object.extend('Product');
    var query = new Parse.Query(Product);

    const product_id = req.params.id;
    var price = req.query.price;
    query.equalTo("product_id", product_id);

    var objid;
    await query
    .find()
    .then(products=>{

      let obj = products[0];
      objid = obj.id;
    },error =>{
      console.log(error);
    });

    console.log("obj ", objid);

    var query1 = new Parse.Query(Product);

    await query1
    .get(objid)
    .then(products=>{
      products.set("price", price);
      products.save();
      res.json({success: products}).status(200);
    },error =>{
      res.json(error).status(400);
    });
  }
  
}