var Lecturer = require('../model/lecturer')


module.exports={
    postlecturer:(req, res) =>{
        var Lecturer = Parse.Object.extend("Lecturer"); // lecturer class
        var lecturer = new Lecturer(); // Lecturer object
      

        let data = req.body;
        data.Lecturer_id = (Math.floor(Math.random()*(1000000-1)+1)).toString();

        lecturer.save({
        ...data
        })
      .then((result) => {
        // The object was saved successfully.
        res.json({success: true, result}).status(201);
      }, (error) => {
        res.json({success: false, ...error}).status(400);
      });
    },
    viewLecturer:(req,res) =>{
        var Lecturers = Parse.Object.extend("Lecturer");
        var query = new Parse.Query(Lecturers);
    
        query
        .find()
        .then(Lecturers=>{
          res.json({success: Lecturers}).status(200);
        },error =>{
          res.json(error).status(400);
        });
    }
}