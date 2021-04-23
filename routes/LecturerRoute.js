const express = require('express');
let router = express.Router();
const LecturerController = require('../controllers/LecturerController');

 
router.post("/add-lecturer", LecturerController.postlecturer);

router.get("/view-lecturer", LecturerController.viewLecturer);


module.exports = router;