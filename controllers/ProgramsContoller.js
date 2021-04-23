var Programs = require('../model/programs')


module.exports={
    postprogram:(req, res) => {
        var Programs = Parse.Object.extend("Program");
        var program = new Programs();
        console.log(req.body);
      
      program.save({
        ...data
      })
      .then((result) => {
        // The object was saved successfully.
        res.json({success: true, result}).status(201);
      }, (error) => {
        res.json({success: false, ...error}).status(400);
      });
       
      },
    getAllPrograms:(req,res)=>{
        var Programs = Parse.Object.extend("Program");
        var query = new Parse.Query(Programs);
    
        query
        .find()
        .then(programs=>{
          res.json({programs: programs}).status(200);
        },error =>{
          res.json(error).status(400);
        });
        },
    getProgramById:(req,res)=>{
      var Programs = Parse.Object.extend("Program");
        var query = new Parse.Query(Programs);

      var id =req.params.id;

      query
      .get(id)
      .then((programs) => {
          program.save({
          ...req.body
          });
            res.json({programs}).status(200);
          })
          .catch(error => {
           console.log(error);
           res.json({success:false,...error}).status(400);
    })

  }
    
}