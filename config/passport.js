//this is the file where we use passport and its strategies
var passport=require('passport');
var User=require('../models/user');
var LocalStrategy=require('passport-local').Strategy;

var sess;
//tells the passport how to store the user in session
passport.serializeUser(function(user,done){
  console.log("fi");
   done(null,user.id);	
});


passport.deserializeUser(function(id,done){
	User.findById(id,function(err,user)
	{
		console.log('ok');
    console.log(user);
		done(err,user);
	})
})
// local signup strategy is used when we want to create a new user
passport.use('local.signup',new LocalStrategy({
  nameField:'name',
  usernameField:'email',
  passwordField:'password',
  passReqToCallback:'true'
},function(req,email,password,done){

//  var password=req.body.password;
  var username=req.body.name;
  var address=req.body.address;
  var contact=req.body.contact;
  //console.log("ok man"+password);;
   if(password.length<4)
   {
    	var displ="sorry password length must be 4 atleast";
   	    var messages=[];
   	    messages.push(displ);
   	    return done(null,false,req.flash('error',messages));
   }
   User.findOne({'email':email},function(err,user){
   	  if(err)
   	  {
   	  	return done(err);
   	  }
   	  if(user)
   	  {
   	  	return done(null,false,{message:'email is already is use'})
   	  }

   	  var newUser=new User();
   	  newUser.email=email;
      newUser.address=address;
      newUser.contact=contact;
   	  newUser.password=newUser.encryptPassword(password);
      newUser.name=username;
      console.log(username);
   	  newUser.save(function(err,result){
   	  	if(err)
   	  	{
          console.log(err);
   	  		return done(err);
   	  	}
   	  	return done(null,newUser);
   	  })
   })
}))




passport.use('local.signin',new LocalStrategy({
  usernameField:'email',
  passwordField:'password',
  passReqToCallback:'true'
},function(req,email,password,done){

  var password=req.body.password;
  console.log(password);
  
   User.findOne({'email':email},function(err,user){
   	  if(err)
   	  {
   	  	 return done(err);
   	  }
   	  if(!user)
   	  {
   	  	 return done(null,false,{message:'No User Found with this Email'})
   	  }
      if(!user.validPassword(password))
      {
      	 return done(null,false,{message:'Wrong Password'})
      }
   	    
       // passport.sess="yes";
   	    return done(null,user);
   })
}))







