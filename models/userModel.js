const mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    name : {type: String, require},
    email : {type: String, require, unique: true},
    password : {type: String, require},
    isAdmin : {type: Boolean, require, default: false},
} , {
    timestamps : true
})

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('users' , userSchema)