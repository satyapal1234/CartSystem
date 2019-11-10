var express=require('express');
var router=express.Router();
var fs=require('fs');
var path=require('path');
var Product=require('../models/product');
var csrf=require('csurf');
var multer = require('multer');
var passport=require('passport');
var fileupload = require("express-fileupload");
router.use(fileupload());
var csrfProtection=csrf();
var Order=require('../models/order');
var Cart=require('../models/cart');
router.use(csrfProtection);







router.get('/adminlogin',function(req,res){
	//console.log("typewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww");
    res.render('admin/adminlogin',{csrfToken:req.csrfToken()});
})





router.post('/adminlogdata',function(req,res){
	email=req.body.email;
	password=req.body.password;

	console.log(email+" "+password);

	if(email=='admin@gmail.com' && password==='1234567890')
	{
		Order.find({},function(err,orders){
			res.render('admin/adminWork',{orders:orders,csrfToken:req.csrfToken()});
		})
		
	}
    else
	{
		res.render('admin/adminlogin',{csrfToken:req.csrfToken()});
	}
})



router.post('/AddNewItem',function(req,res)
{
	//console.log("ok");

//	console.log(req.files);
	//console.log(req.body);
	
    
	//res.render('admin/adminlogin', {_csrfToken: req.csrfToken(), img: req.file.filename, layout: false});

	var category=req.body.category;
	var title=req.body.title;
	var description=req.body.description;
	description=description.trim();

	if(Object.keys(req.files).length==0){
		console.log("sorry upload file")
	}

	let sampleFile=req.files.sampleFile;
	const name=sampleFile.name;
     var requireddir="";
     if(category==='ElectronicNotes')
     {
     	requireddir='electronic';
     }
     else if(category==='ComputerNotes')
     {
     	requireddir='computer';
     }
     else if(category==='AieeeJeeMainNotes')
     {
     	requireddir='jeemain';
     }
     else if(category==='MadeEasyNotes')
     {
     	requireddir='madeeasy';
     }
     requireddir=requireddir+'/'

	sampleFile.mv('public/pdfFolder/'+requireddir+name,function(err){

		if(err){console.log('some error');}
		else
		{
			var fileType='.pdf';
			var files=[],i;
			var imgpath='/ajstyle/pdf.png'
			const newpdf=req.files.sampleFile.name;
			const pdfdir='public/pdfFolder/'+requireddir;
            
			//var pdfPath
			fs.readdir(pdfdir,function(err,files){
				if(err)
					{ console.log('file upload error');}
				else
				{

					if(category==='ElectronicNotes')
						{
							var link='/pdfFolder/electronic/'+name;
							var newItem=Product.Electronic();
							newItem.imagePath=imgpath;
							newItem.title=title;
							newItem.description=description;
							newItem.noOfDownload=0;
							newItem.link=link;
							newItem.save();
							console.log('done uploading1');
						}
				    else if(category==='ComputerNotes')
					    {
					    	var link='/pdfFolder/computer/'+name;
					    	var newItem=Product.Computer();
							newItem.imagePath=imgpath;
							newItem.title=title;
							newItem.description=description;
							newItem.noOfDownload=0;
							newItem.link=link;
							newItem.save();
							console.log('done uploading2');
					    }
					else if(category==='AieeeJeeMainNotes')  
						{
							var link='/pdfFolder/jeemain/'+name;
							var newItem=Product.JeeMainsNotes();
							newItem.imagePath=imgpath;
							newItem.title=title;
							newItem.description=description;
							newItem.noOfDownload=0;
							newItem.link=link;
							newItem.save();
							console.log('done uploading3');
						}  	
			        else if(category==='MadeEasyNotes')
				        {
				        	var link='/pdfFolder/madeeasy/'+name;
				        	var newItem=Product.MadeEasy();
							newItem.imagePath=imgpath;
							newItem.title=title;
							newItem.description=description;
							newItem.noOfDownload=0;
							newItem.link=link;
							newItem.save();
							console.log('done uploading4');
				        }


				        Order.find({},function(err,orders){
							res.render('admin/adminWork',{orders:orders,csrfToken:req.csrfToken(),message:"success"});
						})				
				}
				
			})
		}

	
	})
})




module.exports=router;
