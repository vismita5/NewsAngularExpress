let express =require('express');
let router=express.Router();
let login=require('../model/user');

router.get('/',(req,res,next)=>{
	login.find({email: req.params.email},(err,data)=>{
		if(err){
			return res.send(err);
		}
		else{
			console.log(data);
			res.json(data);
		}
	})
});

module.exports= router;