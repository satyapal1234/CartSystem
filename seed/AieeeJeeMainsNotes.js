var Product=require('../models/product');
var mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/cart",{useNewUrlParser:true});

var aieeeJeeMainNotes=
[
   new Product.JeeMainsNotes(
   {
	imagePath:'/ajstyle/pdf.png',
	title:'arihant physics ebook',
	description:'Most Interesting book contains all topics',
	noOfDownload:0,
	link:'/pdfFolder/jeemain/arihantPhy.pdf'
   }),

   new Product.JeeMainsNotes(
   {
	imagePath:'/ajstyle/pdf.png',
	title:'all chemistery formula for jeemain',
	description:'Good for quick Revision',
	noOfDownload:0,
	link:'/pdfFolder/jeemain/chemFormula.pdf'
   }),
   new Product.JeeMainsNotes(
   {
	imagePath:'/ajstyle/pdf.png',
	title:'all math formula at one place',
	description:'quick revision at one glance',
    noOfDownload:0,
	link:'/pdfFolder/jeemain/MathFormula.pdf'
   }),

   new Product.JeeMainsNotes(
   {
	imagePath:'/ajstyle/pdf.png',
	title:'all physics formula at one place',
	description:'quick revision at one glance',
	noOfDownload:0,
	link:'/pdfFolder/jeemain/PhyFormula.pdf'
   }),
  
];

var done=0;
for(var i=0;i<aieeeJeeMainNotes.length;i++)
{
	aieeeJeeMainNotes[i].save(function(err,result){
		done++;
		if(done === aieeeJeeMainNotes.length)
		{
          exit();
		}
	});
}

function exit()
{
	mongoose.disconnect();
}
