var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var paymentSchema = new Schema({
    "nameMethod": "string",
    "name":"string",
    "paymentid":"string"
    
    
})

module.exports = mongoose.model('Payment',paymentSchema);