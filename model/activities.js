var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ActivitySchema = new Schema ({
    "ActivityHeading":"string",
    "information":"string"
})

module.exports = mongoose.model('activities',ActivitySchema);
