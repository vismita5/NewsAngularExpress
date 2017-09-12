var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var favArticle = new Schema({
	title : String,
	author: String,
	description: String,
	url : String,
	urlToImage: String,
	comments: String
},{collection:"favouriteArticle", versionKey:false});

var model = mongoose.model('favouriteArticle', favArticle);
module.exports = model;
