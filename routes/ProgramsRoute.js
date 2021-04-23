const express = require('express');
let router = express.Router() 
const ProgramsContoller = require('../controllers/ProgramsContoller');

 router.post("/add-program", ProgramsContoller.postprogram);

 router.get("/view-programs",ProgramsContoller.getAllPrograms);

 router.get("/get-program-by-id",ProgramsContoller.getProgramById)


module.exports = router;