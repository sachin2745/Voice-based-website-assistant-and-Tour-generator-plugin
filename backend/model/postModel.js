const {model, Schema} = require('../connection');

const mySchema = new Schema({
    name:{type : String, required : true},
    email:{type : String, required : true},
    password:{type : String, required : true},
    confirmPassword: String

});

module.exports = model('PostCollection', mySchema);