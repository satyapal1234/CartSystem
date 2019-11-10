var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var schema=new Schema({
   imagePath: {type:String,required:true},
   title: {type:String,required:true},
   description: {type:String,required:true},
   price: {type:Number,required:true}
});


var ebook=new Schema({
	  imagePath: {type:String,required:true},
    title: {type:String,required:true},
    description: {type:String,required:true},
    price: {type:Number,required:true},
    link: {type:String,required:true}
});
//module.exports=mongoose.model('Product',schema);


var computerNotes=new Schema({
   imagePath: {type:String,required:true},
    title: {type:String,required:true},
    description: {type:String,required:true},
    noOfDownload: {type:Number,required:true},
    link: {type:String,required:true}
})


var electronicNotes=new Schema({
   imagePath: {type:String,required:true},
    title: {type:String,required:true},
    description: {type:String,required:true},
    noOfDownload: {type:Number,required:true},
    link: {type:String,required:true}
})


var madeeasyNotes=new Schema({
   imagePath: {type:String,required:true},
    title: {type:String,required:true},
    description: {type:String,required:true},
    noOfDownload: {type:Number,required:true},
    link: {type:String,required:true}
})


var  jeemainsNotes=new Schema({
   imagePath: {type:String,required:true},
    title: {type:String,required:true},
    description: {type:String,required:true},
    noOfDownload: {type:Number,required:true},
    link: {type:String,required:true}
})


var JeeMainsNotes=new mongoose.model('JeeMainsNotes',jeemainsNotes);
var MadeEasy=new mongoose.model('MadeEasy',madeeasyNotes);
var Electronic=new mongoose.model('Electronic',electronicNotes);
var Computer=new mongoose.model('Computer',computerNotes);
var Product=new mongoose.model('Product',schema);
var Ebook=new mongoose.model('Ebook',ebook);


module.exports = {
    Product: Product,
    Ebook:Ebook,
    Computer:Computer,
    Electronic:Electronic,
    MadeEasy:MadeEasy ,
    JeeMainsNotes,JeeMainsNotes 
};



