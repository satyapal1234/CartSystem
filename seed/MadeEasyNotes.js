var Product=require('../models/product');
var mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/cart",{useNewUrlParser:true});

var madeeasyNotes=
[
   new Product.MadeEasy(
   {
	imagePath:'/ajstyle/pdf.png',
	title:'computer Programming in c++',
	description:'Most Wonderful book for beginner1!!!!',
	noOfDownload:0,
	link:'/pdfFolder/spm.pdf'
   }),

   new Product.MadeEasy(
   {
	imagePath:'/ajstyle/pdf.png',
	title:'computer Programming in c++',
	description:'Most Wonderful book for beginner2!!!!',
	noOfDownload:0,
	link:'/pdfFolder/spm2.pdf'
   }),
   new Product.MadeEasy(
   {
	imagePath:'/ajstyle/pdf.png',
	title:'computer Programming in c++',
	description:'Most Wonderful book for beginner3!!!!',
    noOfDownload:0,
	link:'https://imojo.in/3pt95fm'
   }),

   new Product.MadeEasy(
   {
	imagePath:'/ajstyle/pdf.png',
	title:'computer Programming in c++',
	description:'Most Wonderful book for beginner!!!!',
	noOfDownload:0,
	link:'https://imojo.in/3pt95fm'
   }),
   new Product.MadeEasy(
   {
	imagePath:'/ajstyle/pdf.png',
	title:'computer Programming in c++',
	description:'Most Wonderful book for beginner!!!!',
	noOfDownload:0,
	link:'https://imojo.in/3pt95fm'
   }),

   new Product.MadeEasy(
   {
	imagePath:'/ajstyle/pdf.png',
	title:'computer Programming in c++',
	description:'Most Wonderful book for beginner!!!!',
	noOfDownload:0,
	link:'https://imojo.in/3pt95fm'
   }),
   new Product.MadeEasy(
   {
	imagePath:'/ajstyle/pdf.png',
	title:'computer Programming in c++',
	description:'Most Wonderful book for beginner!!!!',
	noOfDownload:0,
	link:'https://imojo.in/3pt95fm'
   }),

   new Product.MadeEasy(
   {
	imagePath:'/ajstyle/pdf.png',
	title:'computer Programming in c++',
	description:'Most Wonderful book for beginner!!!!',
	noOfDownload:0,
	link:'https://imojo.in/3pt95fm'
   }),

];

var done=0;
for(var i=0;i<madeeasyNotes.length;i++)
{
	madeeasyNotes[i].save(function(err,result){
		done++;
		if(done === madeeasyNotes.length)
		{
          exit();
		}
	});
}

function exit()
{
	mongoose.disconnect();
}
