let express = require('express');
let router = express.Router();
let favArticle = require('../model/schema1.js')

router.post('/add', function(req, res, next) {
  var title = req.body.title;
  var author = req.body.author;
  var description = req.body.description;
  var url = req.body.url;
  var urlToImage = req.body.urlToImage;
  var comments = req.body.comments;
      favArticle.insertMany({
      "title":title,
      "author":author,
      "description":description,
      "url":url,
      "urlToImage":urlToImage,
      "comments":comments
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

module.exports = router;