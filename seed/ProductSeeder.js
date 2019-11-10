var Product=require('../models/product');


var mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/cart",{useNewUrlParser:true});
var products=
[
   new Product.Product(
   {
	imagePath:'https://www.adasbooks.com/sites/seattletechnicalbooks.com/files/annotated%20turing.jpg',
	title:'computer Programming in c++',
	description:'Most Wonderful book for beginner!!!!',
	price:10
   }),

   new Product.Product(
   {
	imagePath:'https://images.tandf.co.uk/common/jackets/amazon/978113803/9781138039148.jpg',
	title:'operating system by Galvin',
	description:'Most Wonderful book for beginner!!!!',
	price:10
   }),
   new Product.Product(
   {
	imagePath:'https://www.adasbooks.com/sites/seattletechnicalbooks.com/files/annotated%20turing.jpg',
	title:'computer Programming in c++',
	description:'Most Wonderful book for beginner!!!!',
	price:10
   }),

   new Product.Product(
   {
	imagePath:'https://images.tandf.co.uk/common/jackets/amazon/978113803/9781138039148.jpg',
	title:'operating system by Galvin',
	description:'Most Wonderful book for beginner!!!!',
	price:10
   }),
   new Product.Product(
   {
	imagePath:'https://www.adasbooks.com/sites/seattletechnicalbooks.com/files/annotated%20turing.jpg',
	title:'computer Programming in c++',
	description:'Most Wonderful book for beginner!!!!',
	price:10
   }),

   new Product.Product(
   {
	imagePath:'https://images.tandf.co.uk/common/jackets/amazon/978113803/9781138039148.jpg',
	title:'operating system by Galvin',
	description:'Most Wonderful book for beginner!!!!',
	price:10
   }),
   new Product.Product(
   {
	imagePath:'https://www.adasbooks.com/sites/seattletechnicalbooks.com/files/annotated%20turing.jpg',
	title:'computer Programming in c++',
	description:'Most Wonderful book for beginner!!!!',
	price:10
   }),

   new Product.Product(
   {
	imagePath:'https://images.tandf.co.uk/common/jackets/amazon/978113803/9781138039148.jpg',
	title:'operating system by Galvin',
	description:'Most Wonderful book for beginner!!!!',
	price:10
   }),

];

var done=0;
for(var i=0;i<products.length;i++)
{
	products[i].save(function(err,result){
		done++;
		if(done === products.length)
		{
          exit();
		}
	});
}

function exit()
{
	mongoose.disconnect();
}









var ebooks=
[
   new Product.Ebook(
   {
	imagePath:'/ajstyle/pdf.png',
	title:'computer Programming in c++',
	description:'Most Wonderful book for beginner!!!!',
	price:10,
	link:'https://imojo.in/3pt95fm'
   }),

   new Product.Ebook(
   {
	imagePath:'/ajstyle/pdf.png',
	title:'operating system by Galvin',
	description:'Most Wonderful book for beginner!!!!',
	price:10,
	link:'https://imojo.in/3pt95f'
   }),
   new Product.Ebook(
   {
	imagePath:'/ajstyle/pdf.png',
	title:'computer Programming in c++',
	description:'Most Wonderful book for beginner!!!!',
	price:10,
	link:'https://imojo.in/3pt95f'
   }),

   new Product.Ebook(
   {
	imagePath:'/ajstyle/pdf.png',
	title:'operating system by Galvin',
	description:'Most Wonderful book for beginner!!!!',
	price:10,
	link:'https://imojo.in/3pt95f'
   }),
   new Product.Ebook(
   {
	imagePath:'/ajstyle/pdf.png',
	title:'computer Programming in c++',
	description:'Most Wonderful book for beginner!!!!',
	price:10,
	link:'https://imojo.in/3pt95f'
   }),

   new Product.Ebook(
   {
	imagePath:'/ajstyle/pdf.png',
	title:'operating system by Galvin',
	description:'Most Wonderful book for beginner!!!!',
	price:10,
	link:'https://imojo.in/3pt95f'
   }),
  

];


var done2=0;
for(var i=0;i<ebooks.length;i++)
{
	ebooks[i].save(function(err,result){
		done2++;
		if(done2 === ebooks.length)
		{
          out();
		}
	});
}

function out()
{
	mongoose.disconnect();
}