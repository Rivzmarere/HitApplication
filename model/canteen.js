var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CanteenSchema = new Schema({
    "mealName": "string",
    "description": "string",
    "mealId": "String",
    
})

module.exports = mongoose.model('canteen',CanteenSchema);