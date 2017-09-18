let express = require('express');
let router = express.Router();
let favArticle = require('../model/schema1.js')

router.get('/view', function(req, res, next){
 favArticle.find(function(err,data){
  if(err){
  	console.log(err);
  	res.send(err);
  }
  	else {
  		console.log(data);
  		res.json({news:data});
  }
  })
});


/*router.post('/', function(req, res, next) {
  var title = req.body.title;
  var author = req.body.author;
  var description = req.body.description;
  var url = req.body.url;
  var urlToImage = req.body.urlToImage;
      favArticle.insertMany({
      "title":title,
      "author":author,
      "description":description,
      "url":url,
      "urlToImage":urlToImage
      },function(err,data){
        if(err){
          console.log(err);
        }
        else
        { console.log(data);
          res.json({news:data});
        }
    })
});

router.put('/',function(req,res,next){
  var id = req.body.id;
  var title = req.body.title;
  var author = req.body.author;
  var description = req.body.description;
  var url = req.body.url;
  var urlToImage = req.body.urlToImage;
  favArticle.update({'_id':id},
    {$set:{    "title":title,
      		"author":author,
      		"description":description,
      		"url":url,
      		"urlToImage":urlToImage
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

router.delete('/',function(req,res,next){
  var title = req.body.title;
  favArticle.remove({'title':title},function(err,data){
      if(err)
      { console.log(err);
        res.send(err);
      }
      else
      { console.log(data.result);
        res.json({news:data});
      }
    })
});*/

module.exports = router;
