var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StudentsSchema = new Schema({
    "name": "string",
    "surname":"string",
    "RegNumber":"string",
    "D.O.B":"string",
    "Program":"string",
    "academicLevel":"string"
})

module.exports = mongoose.model('Students',StudentsSchema);