const {model, Schema} = require('../connection');

const mySchema = new Schema({
    name:{type : String, required : true},
    email:{type : String, required : true},
    Password:{type : String, required : true}

});

module.exports = model('PostCollection', mySchema);