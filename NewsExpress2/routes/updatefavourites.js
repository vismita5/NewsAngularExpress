let express = require('express');
let router = express.Router();
let favArticle = require('../model/schema1.js')

router.put('/update',function(req,res,next){
  var id = req.body._id;
  
  var comments = req.body.comments;
  favArticle.update({"_id":id},
    {$set:{
      
          "comments":comments
	   }
	    },function(err,data){
      if(err)
      { console.log(err);
        res.send(err);
      }
      else
      { console.log(data);
        res.json({news:data});
      }

    })
});

module.exports = router;