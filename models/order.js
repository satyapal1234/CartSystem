var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var orderschema=new Schema({
   name: {type:String,required:true},
   contact: {type:String,required:true},
   address: {type:String,required:true},
   email: {type:String,required:true},
   price: {type:Number,required:true},
   mode: {type:String,required:true},
   today:{type:String,required:true},
   itemdetail: [{
   	itemid:{ type: String },
    itemname: { type: String },
    itempicpath: { type: String },
    qty: String,
    price: String,
    titles:String
    
  }]
});


var Order=new mongoose.model('Order',orderschema);
module.exports=Order;
