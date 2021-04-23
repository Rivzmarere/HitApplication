var activities = require('../model/activities')

module.exports={
  
  // Get All Activities
  getAllActivity: (req,res)=>{
        var Activity = Parse.Object.extend("Activity");
        var query = new Parse.Query(Activity);
    
        query
        .find()
        .then(activity=>{
          res.json({success: activity}).status(200);
        },error =>{
          res.json(error).status(400);
        });
  },
    
  // Add new Activitiy
  addActivity: (req, res) => {
    var Activity = Parse.Object.extend("Activity"); // 
    var Activity = new Activity(); //

    activity.save({
      ...req.body
    })
    .then((result) => {
      // The object was saved successfully.
      res.json({success: true, result}).status(201);
    }, (error) => {
      res.json({success: false, ...error}).status(400);
    });
  }
  
}