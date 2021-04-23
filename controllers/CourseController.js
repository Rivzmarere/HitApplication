const course = require('../model/course');



module.exports={
    postCourse:(req, res)=>{
        var Course = Parse.Object.extend("Course");
        var course = new Courses();

        let data = req.body;
        data.course_id = (Math.floor(Math.random()*(10000-1)+1)).toString();

        course.save({
        ...data
        })
        .then((result) => {
            // The object was saved successfully.
            res.json({success: true, result}).status(201);
          }, (error) => {
            res.json({success: false, ...error}).status(400);
          });
    },
    getAllCourses: (req,res)=>{
        var Courses = Parse.Object.extend("Course");
        var query = new Parse.Query(Courses);
        
        query
        .find()
        .then(courses=>{
          res.json({success: courses}).status(200);
        },error =>{
          res.json(error).status(400);
        })
    }
}