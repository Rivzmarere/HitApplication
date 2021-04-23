var Students = require('../model/students')


module.exports={
    postStudents:(req, res) => {
        var Students = Parse.Object.extend("Student");
        var student = new Students(); 
      

        let data = req.body;
        data.student_id = (Math.floor(Math.random()*(1000000-1)+1)).toString();

        student.save({
        ...data
        })
      .then((result) => {
        // The object was saved successfully.
        res.json({success: true, result}).status(201);
      }, (error) => {
        res.json({success: false, ...error}).status(400);
      });
      
      
      },
      
    
  getAllStudents:(req,res)=>{
        var Students = Parse.Object.extend("Student");
        var query = new Parse.Query(Students);
    
        query
        .find()
        .then(students=>{
          res.json({success: students}).status(200);
        },error =>{
          res.json({students:[]}).status(400);
        });
  },
    
      
    
        getStudentById:(req,res)=>{
          var Students = Parse.Object.extend('Student');
          var query = new Parse.Query(Students)
          
         var id = req.body.id;
         query.get(id)
         .then(students =>{
           res.json({success: true, students}).status(200);
         }, error => {
            res.json({success: false, students: [],...error}).status(400);
         })
    },
    
        
        
        putByStudentId:(req,res) =>{
          var Student =Parse.Object.extend('Student');
          var query = new Parse.Query(Student);
    
          var id =req.params.id;
    
          query
          .get(id)
          .then((student) => {
              student.save({
              ...req.body
              });
                res.json({student}).status(200);
              })
              .catch(error => {
               console.log(error);
               res.json({success:false,...error}).status(400);
        })
    
    }
}


