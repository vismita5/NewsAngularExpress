let express = require('express');
let router = express.Router();
let favArticle = require('../model/schema1.js')

router.delete('/delete/:id',function(req,res){
  
  favArticle.remove({"_id":req.params.id},function(err,data){
      if(err)
      { console.log(err);
        res.send(err);
      }
      else
      { console.log(data.result);
        res.json({news:data});
      }
    })
});

module.exports = router;