var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var LecturerSchema = new Schema ({
    "Name":"string",
    "hitId":"string",
    "password":"string"
})

module.exports = mongoose.model('Lecturer',LecturerSchema);
