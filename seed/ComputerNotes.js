var Product=require('../models/product');
var mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/cart",{useNewUrlParser:true});

var computerNotes=
[
   new Product.Computer(
   {
	imagePath:'/ajstyle/pdf.png',
	title:'hand written computer oragnaisation notes',
	description:'Usefor For Gate Aspirant!!!!',
	noOfDownload:0,
	link:'/pdfFolder/computer/comOrg.pdf'
   }),

   new Product.Computer(
   {
	imagePath:'/ajstyle/pdf.png',
	title:'hand written notes of computer network',
	description:'Usefor For Gate Aspirant!!!!',
	noOfDownload:0,
	link:'/pdfFolder/computer/computerNetwork.pdf'
   }),
   new Product.Computer(
   {
	imagePath:'/ajstyle/pdf.png',
	title:'hand written of design and analysis of algo',
	description:'Usefor For Gate Aspirant!!!!',
    noOfDownload:0,
	link:'/pdfFolder/computer/daa.pdf'
   }),

   new Product.Computer(
   {
	imagePath:'/ajstyle/pdf.png',
	title:'hand written notes for dbms',
	description:'Usefor For Gate Aspirant!!!!',
	noOfDownload:0,
	link:'/pdfFolder/computer/dbms.pdf'
   }),
   new Product.Computer(
   {
	imagePath:'/ajstyle/pdf.png',
	title:'hand written of digital network',
	description:'Usefor For Gate Aspirant!!!!',
	noOfDownload:0,
	link:'/pdfFolder/computer/dbms.pdf'
   }),

   new Product.Computer(
   {
	imagePath:'/ajstyle/pdf.png',
	title:'hand written of theory of computation+',
	description:'Usefor For Gate Aspirant!!!!',
	noOfDownload:0,
	link:'/pdfFolder/computer/toc.pdf'
   }),
   new Product.Computer(
   {
	imagePath:'/ajstyle/pdf.png',
	title:'data mining book by yegendra narayana',
	description:'Easy to understand covers all topics',
	noOfDownload:0,
	link:'/pdfFolder/computer/dataMining.pdf'
   }),

  

];

var done=0;
for(var i=0;i<computerNotes.length;i++)
{
	computerNotes[i].save(function(err,result){
		done++;
		if(done === computerNotes.length)
		{
          exit();
		}
	});
}

function exit()
{
	mongoose.disconnect();
}
