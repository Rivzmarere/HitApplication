var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var courseSchema = new Schema({
    "courseName":"string",
    "courseDescription":"string",
    "program":"string",
    "hitId":"string"
    
})

module.exports = mongoose.model('course',courseSchema);
