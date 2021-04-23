const express = require('express');
const CourseController = require('../controllers/CourseController');
let router = express.Router();


router.post("/add-course",CourseController.postCourse);
router.get("/view-courses",CourseController.getAllCourses);


module.exports = router;