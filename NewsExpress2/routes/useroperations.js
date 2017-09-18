let express = require('express');
let router = express.Router();
let user = require('../model/user.js');
let bcrypt = require('bcrypt');


router.post('/register', function(req, res, next) {
  let pass = req.body.password;
  let hash;

       bcrypt.hash('myPassword', 10, function(err, hash) {
      // Store hash in database
      pass = hash;
            
    });
    /*bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(pass, salt, function(err, hash) {
        // Store hash in your password DB.
        pass = hash;
            next();
    });
});*/
    console.log(req.body.password)

      user.insertMany({
      "username":req.body.username,
      "password":pass,
      "email": req.body.email
      },function(err,data){
        if(err){
          console.log(err);
        }
        else
        { console.log(pass);
          res.json({user:data});
        }
    })///
      

});

router.get('/login/:email', function(req, res, next){
 user.find({email:req.params.email},function(err,data){
  if(err){
    console.log(err);
    res.send(err);
  }
    else {
      console.log(data);
      res.json({user:data});
  }
  })
});
router.get('/login', function(req, res, next){
 user.find(function(err,data){
  if(err){
    console.log(err);
    res.send(err);
  }
    else {
      console.log(data);
      res.json({user:data});
  }
  })
});

module.exports = router;