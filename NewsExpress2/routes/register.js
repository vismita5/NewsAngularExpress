let express =require('express');
let router=express.Router();
let login_schema=require('../model/user');


router.post('/',(req,res,next)=>{
	//console.log(res.body);
	 let login =new login_schema({
	  email:req.body.email,
	  username:req.body.username,
	  password:req.body.password})
	login.save((err,data)=>{
		if(err){
			res.send(err);
		}
		else{
			res.json(data);
		}
	})
});

module.exports=router;