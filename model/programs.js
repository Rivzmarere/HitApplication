var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProgramSchema = new Schema({
    "name": "string",
    "code":"string"
})

module.exports = mongoose.model('Program',ProgramSchema);