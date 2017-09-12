var mongoose = require('mongoose');
let bcrypt = require('bcrypt');
var Schema = mongoose.Schema;


var user = new Schema({
	username:String,
	password: String,
	email: {type: String, unique:true}

},{collection:"user", versionKey:false});

var model = mongoose.model('user', user);
module.exports = model;
