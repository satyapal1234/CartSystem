var express=require('express');
var router=express.Router();
var Product=require('../models/product');
var Order=require('../models/order');
var csrf=require('csurf');
var passport=require('passport');
var csrfProtection=csrf();
var Cart=require('../models/cart');
var Insta = require('instamojo-nodejs');
router.use(csrfProtection);
//var sessval = require('../routes/user');

var person1 = new Person();



  

router.get('/',function(req,res,next){
	  Product.Product.find({},function(err,foundlist)
		{
			var productChunks=[];
			var chunksize=3;
			for(var i=0;i<foundlist.length;i+=chunksize)
			{
				productChunks.push(foundlist.slice(i,i+chunksize));
			}
		     res.render('index',{title:"Shopping Cart", items:productChunks});	

		   //
		});
	       //console.log(foundlist.length+"sajtj");
	
})


router.get('/about',function(req,res){

	console.log('ttttttttttttttttttttttttttttttt');
	res.render("about");
})


router.get('/add-to-cart/:id',function(req,res,next){
	console.log('no');
	var productId=req.params.id;

	var cart=new Cart(req.session.cart ? req.session.cart:{});

	Product.Product.findById(productId,function(err,product){
		    if(err)
			{return res.redirect('/');}

		     cart.add(product,product.id);
		     req.session.cart=cart;
		    console.log(req.session.cart);
		     res.redirect('/');
	})


})



router.get('/reduce/:id',function(req,res,next){
	var productId=req.params.id;
	console.log(productId);
	var cart=new Cart(req.session.cart ? req.session.cart:{});

	cart.reduceByOne(productId);
	req.session.cart=cart;
	res.redirect('/shopping-cart');
})




router.get('/remove/:id',function(req,res,next){
	var productId=req.params.id;
	console.log(productId);
	var cart=new Cart(req.session.cart ? req.session.cart:{});

	cart.removeItem(productId);
	req.session.cart=cart;
	res.redirect('/shopping-cart');
})


router.get('/shopping-cart',function(req,res,next){

  
  if(!req.session.cart)
  {
  	res.render('shopping-cart',{products:null});
  }
  else
  {
	  var cart=new Cart(req.session.cart)
	  res.render('shopping-cart',{products:cart.generateArray(),totalPrice:cart.totalPrice})
   }
})


router.get('/checkout',function(req,res,next){

	  if(!req.session.cart)
	  {
	  	res.redirect('/shopping-cart');
	  }
	  else
	  {
	    var cart=new Cart(req.session.cart);
	    res.render('checkout',{total:cart.totalPrice,csrfToken:req.csrfToken()})	
	  }
})




router.get('/categories/computer_notes',function(req,res){
	  Product.Computer.find({},function(err,foundlist)
		{
			var productChunks=[];
			var chunksize=3;
			for(var i=0;i<foundlist.length;i+=chunksize)
			{
				productChunks.push(foundlist.slice(i,i+chunksize));
			}
		     res.render('categories/computer_notes',{title:"Shopping Cart", items:productChunks,csrfToken:req.csrfToken()});	

		   //
		});
//	res.render('categories/engineering_notes');
})



router.get('/categories/electronic_notes',function(req,res){
	  Product.Electronic.find({},function(err,foundlist)
		{
			var productChunks=[];
			var chunksize=3;
			for(var i=0;i<foundlist.length;i+=chunksize)
			{
				productChunks.push(foundlist.slice(i,i+chunksize));
			}
		     res.render('categories/electronic_notes',{title:"Shopping Cart", items:productChunks,csrfToken:req.csrfToken()});	

		   //
		});
//	res.render('categories/engineering_notes');
})




router.get('/categories/made_easy_notes',function(req,res){
	  Product.MadeEasy.find({},function(err,foundlist)
		{
			var productChunks=[];
			var chunksize=3;
			for(var i=0;i<foundlist.length;i+=chunksize)
			{
				productChunks.push(foundlist.slice(i,i+chunksize));
			}
		     res.render('categories/made_easy_notes',{title:"Shopping Cart", items:productChunks,csrfToken:req.csrfToken()});	

		   //
		});
//	res.render('categories/engineering_notes');
})




router.get('/categories/jeemains_notes',function(req,res){
	 console.log("turemind");
	  Product.JeeMainsNotes.find({},function(err,foundlist)
		{
			var productChunks=[];
			var chunksize=3;
			for(var i=0;i<foundlist.length;i+=chunksize)
			{
				productChunks.push(foundlist.slice(i,i+chunksize));
			}
		     res.render('categories/jeemains_notes',{title:"Shopping Cart", items:productChunks,csrfToken:req.csrfToken()});	

		   //
		});
//	res.render('categories/engineering_notes');
})






router.get('/ebook',function(req,res)
{
	
 Product.Ebook.find({},function(err,foundlist)
		{
			var productChunks=[];
			var chunksize=3;
			for(var i=0;i<foundlist.length;i+=chunksize)
			{
				productChunks.push(foundlist.slice(i,i+chunksize));
			}
		     res.render('ebook',{title:"Shopping Cart", items:productChunks});	

		   //
		});
})



router.get('/success',function(req,res){
	// console.log(person1.name+"okd isflsjfjflsfj");

	 var neworder=new Order();
	 neworder.name=person1.name;
	 neworder.contact=person1.contact;
	neworder.address=person1.address;
	 neworder.email=person1.email;
	neworder.mode=person1.mode;
	neworder.price=person1.totalprice;
	neworder.today=person1.today;

   var cart=new Cart(req.session.cart);
   var p=cart.generateArray();
    neworder.itemdetail=p;
 neworder.save();
 req.session.cart=null;
 res.render('success',{csrfToken:req.csrfToken(),product:neworder});


//res.render('success',{csrfToken:req.csrfToken()})

})









router.post('/checkout',function(req,res,next)
{
	//var sess=req.session;
      var address=req.body.current_address;
      var contact=req.body.contact;
      var btnval=req.body.btn;
      console.log(btnval+" hhhhhhhhh");
      var totalprice=req.body.totalprice;
    //  console.log(totalprice);
        var today = new Date();
		var dd = String(today.getDate()).padStart(2, '0');
		var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		var yyyy = today.getFullYear();

		today = mm + '/' + dd + '/' + yyyy;

      
      person1.address=address;
      person1.contact=contact;
      person1.name=req.user.name;
      person1.email=req.user.email;
      person1.mode=btnval;
      person1.totalprice=totalprice;
      person1.today=today;

     if(btnval=="offline")
     {
     	res.redirect('/success');
     }

     else
     {
			  console.log("fsjfsjfl",totalprice);
		      Insta.setKeys("e94079733b1bc454c6f80b9fe49892a7","febbce517aadfe67fb04dee8706228ae");
		         var data = new Insta.PaymentData();
                data.purpose = "book-buy";
               // if(typeofroom==='Double bed AC Room')
            
                data.amount=totalprice;
                data.currency                = 'INR';
                data.buyer_name              = "xyz"
                data.email                   = req.user.email;
                data.phone                   = contact;
                data.send_sms                = true
                data.send_email              = true
                data.allow_repeated_payments = false
              
                data.redirect_url            = "http://localhost:3000/success";   
               

              Insta.createPayment(data, function(error, response) {
                if (error) 
                  {
                   console.log(error);
                  } 
                  else 
                  {
            
                  var obj = JSON.parse(response);
                  res.redirect(obj.payment_request.longurl);
                  console.log(obj.payment_request.longurl);
                  }
               });

           }    
    //console.log(req.body.Username);
})


// router.get('/admin/adminlogin',function(req,res)
// {
// 	console.log('dddddddddddddddddddddddddddddd');
// 	res.render('admin/adminlogin',{csrfToken:req.csrfToken()});
// })


/////////////////////////////////////////////////
  function Person() {
		this.name = "unknown";
		this.email = "unknown";
		this.address="unknown";
		this.contact="unknown";
		this.mode="unknown";
		this.totalprice="unknown";
		this.today="unknown";
	}










module.exports=router;