var _ = require("lodash");
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
const http = require('http');
var bcrypt = require('bcrypt');
var favourites = require('./routes/favourites.js');
var postfavourites = require('./routes/postfavourites.js');
var updatefavourites = require('./routes/updatefavourites.js');
var deletefavourites = require('./routes/deletefavourites.js');
var user = require('./routes/useroperations.js');
var config = require('./config/favouritesDBConfig');
var cors = require('cors');
var jwt = require('jsonwebtoken');
var passport = require("passport");
var passportJWT = require("passport-jwt");
var bcrypt = require('bcrypt')
var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;

var port = 3040;


var app = express();
app.use(cors());
app.set('port', port);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.listen(port, function(){
	console.log('Jesuis a port : '+ port);
});
var db = 'mongodb://localhost/newswebproj';
app.use('/favourites', favourites);
app.use('/favourites', postfavourites);
app.use('/favourites', updatefavourites);
app.use('/favourites', deletefavourites);
app.use('/user', user);
mongoose.connect(config.dbURL);
mongoose.connection.on('connected', function(){
	console.log("connected" );
})
mongoose.connection.on('error', function(){
	console.log("Error");
})


module.exports = app;
