var mongoose = require('mongoose');
mongoose.set('debug',true);
let bcrypt = require('bcrypt');
var Schema = mongoose.Schema;


var login = new Schema({
	username:String,
	password: String,
	email: {type: String, unique:true}

},{collection:"user", versionKey:false});


login.pre('save', function (next) {  
  var user = this;
  console.log(user);
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

login.methods.comparePassword = function(pw, cb) {  
  bcrypt.compare(pw, this.password, function(err, isMatch) {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};




var model = mongoose.model('user', login);
module.exports = model;
