const express = require('express');
let router = express.Router() 
const StudentsControllers = require('../controllers/StudentsControllers');

 router.post("/add-product", StudentsControllers.postStudents);

 router.get("/view-products",StudentsControllers.getAllStudents);

 router.get("/get-product-by-id",StudentsControllers.getStudentById)

 router.get("/update-student/:id",StudentsControllers.putByStudentId);

module.exports = router;