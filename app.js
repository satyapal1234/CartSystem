const express=require("express");
const bodyparser=require("body-parser");
const ejs=require("ejs");
const favicon=require('serve-favicon');
const logger=require('morgan');
const mongoose=require('mongoose');
const path=require('path');
const session=require('express-session');
const passport=require('passport');//for  login and sign up
const flash=require('connect-flash');
const validator=require('express-validator');
const MongoStore=require('connect-mongo')(session);

const Product=require('../../models/product');



const app=express();


//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'));
app.use(bodyparser.urlencoded({extended:true}));

app.use(express.static("public"));
app.use(session(
	{
		secret: 'sssaaa',
		saveUninitialized: false,
		resave: false,
		store:new MongoStore({
			mongooseConnection:mongoose.connection
		}),
		cookie:{maxAge:180*60*1000}
	}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb+srv://admin-satya:test123@cluster0-tg2wc.mongodb.net/cart",{useNewUrlParser:true});
require('./config/passport');
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');


app.use(function(req,res,next){
	res.locals.login=req.isAuthenticated();
	res.locals.session=req.session;
	next();
})
var routes=require('./routes/index');
var userRoutes=require('./routes/user');
var adminRoutes=require('./routes/admin');




app.post('/updateComputerdown',function(req,res)
{
	var id=req.body.bookid;
	 console.log(id);
console.log('at');
	if (id.match(/^[0-9a-fA-F]{24}$/))
	{
		console.log("saftyuunotdlfsfjljdf");
		Product.Computer.findOne({_id:id},function(err,foundlist1)
		{
			foundlist1.noOfDownload=foundlist1.noOfDownload+1;
			foundlist1.save();
			res.end('done');
		
		})
	}
	else
	{
		console.log("notdlfsfjljdf");
		res.end('error');
	}
   
	
})




//updateElectronicdown


app.post('/updateElectronicdown',function(req,res)
{
	var id=req.body.bookid;
	 console.log(id);
console.log('at');
	if (id.match(/^[0-9a-fA-F]{24}$/))
	{
		console.log("saftyuunotdlfsfjljdf");
		Product.Electronic.findOne({_id:id},function(err,foundlist1)
		{
			foundlist1.noOfDownload=foundlist1.noOfDownload+1;
			foundlist1.save();
			res.end('done');
		
		})
	}
	else
	{
		console.log("notdlfsfjljdf");
		res.end('error');
	}
   
	
})





//updateMadeEasyDown

app.post('/updateMadeEasyDown',function(req,res)
{
	var id=req.body.bookid;
	 console.log(id);
console.log('at');
	if (id.match(/^[0-9a-fA-F]{24}$/))
	{
		console.log("saftyuunotdlfsfjljdf");
		Product.MadeEasy.findOne({_id:id},function(err,foundlist1)
		{
			foundlist1.noOfDownload=foundlist1.noOfDownload+1;
			foundlist1.save();
			res.end('done');
		
		})
	}
	else
	{
		console.log("notdlfsfjljdf");
		res.end('error');
	}
   
	
})



//updateAieeeDown
app.post('/updateAieeeDown',function(req,res)
{
	var id=req.body.bookid;
	 console.log(id);
console.log('at');
	if (id.match(/^[0-9a-fA-F]{24}$/))
	{
		console.log("saftyuunotdlfsfjljdf");
		Product.JeeMainsNotes.findOne({_id:id},function(err,foundlist1)
		{
			foundlist1.noOfDownload=foundlist1.noOfDownload+1;
			foundlist1.save();
			res.end('done');
		
		})
	}
	else
	{
		console.log("notdlfsfjljdf");
		res.end('error');
	}
   
	
})




app.use('/admin',adminRoutes);
app.use('/user',userRoutes);
app.use('/',routes);





//catch 404 and forward to error handler
app.use(function(req,res,next)
{
	var err=new Error('Not Found');
	err.status=404;
	next(err);
})



//development error handler
if(app.get('env')==='development')
{
	app.use(function(err,res,res,next){
		res.status(err.status||500);
		res.render('error',{
	      message:err.message,
		  error:err
		});121






















































                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            


		

	})
}


















let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}



app.listen(port,function(req,res)
{
	console.log("started runninng succesfully");
})
