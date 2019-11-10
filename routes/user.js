var express=require('express');
var router=express.Router();
var Product=require('../models/product');
var csrf=require('csurf');
var passport=require('passport');
var csrfProtection=csrf();
router.use(csrfProtection);
var Order=require('../models/order');
var Cart=require('../models/cart');
var User=require('../models/user');


var sess=0;
router.get('/profile',isLoggedIn, function(req,res,next){
    sess=1;
    //console.log(sess);
    Order.find({email:req.user.email},function(err,orders){
    	if(err)
    	{
    		return res.write('Error');
    	}
    	else
    	{
    		console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    		orders.forEach(function(order){
    			cart=new Cart(order);
    			order.items=cart.generateArray();
    		})

    		User.findOne({email:req.user.email},function(err,user){
    			if(err){console.log('kuch glat hai');}
    			else
    			{
    				console.log(orders.length);
    	         	res.render('user/profile',{orders:orders,user:user});
    			}
    		})
    		
    		
    	}
    })
    passport.sess="1";
	//res.render('user/profile',{orders:orders});
	//console.log("hkhkhkhkhkhkhkhkhkh");
})

router.get('/logout',function(req,res,next){
	//console.log(sess);
	 passport.sess="0";
	req.logout();
	res.redirect('/');
})


router.use('/',notLoggedIn,function(req,res,next)
{
	next();
})

router.get('/signup',function(req,res,next)
{
	var messages=req.flash('error');
	res.render('user/signup',{csrfToken:req.csrfToken() ,messages:messages,hasErrors:messages.length>0});
})



router.post('/signup',passport.authenticate('local.signup',{
	successRedirect: '/user/profile',
	failureRedirect:'/user/signup',
	failureFlash:true
}));




router.get('/signin',function(req,res,next){
	var messages=req.flash('error');
	res.render('user/signin',{csrfToken:req.csrfToken() ,messages:messages,hasErrors:messages.length>0});
})



router.post('/signin',passport.authenticate('local.signin',{
	successRedirect: '/user/profile',
	failureRedirect:'/user/signin',
	failureFlash:true
}))








function isLoggedIn(req,res,next){
	if(req.isAuthenticated())
	{
		return next();
	}
	res.redirect('/');
}



function notLoggedIn(req,res,next){
	console.log('not');
	if(!req.isAuthenticated())
	{
		return next();
	}
	res.redirect('/');
}



module.exports=router;


