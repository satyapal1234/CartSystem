module.exports=function(oldCart){
	//console.log(oldCart);
  this.items=oldCart.items || {};
  this.totalQty=oldCart.totalQty || 0;
  this.totalPrice=oldCart.totalPrice || 0;
  

  this.add=function(items,id){

  	var storedItem=this.items[id];
   
   console.log("Ssssssssssssssssss"+items);
  	if(!storedItem)
  	{
  		 storedItem=this.items[id]={item:items, qty:0, price:0};
     //  storedItem.title=items.title;
     //console.log(storedItem.item);
  	}

  	storedItem.qty++;
    storedItem.titles=storedItem.item.title;
   // console.log(storedItem+"jjjsdfjlsjf");
  	//console.log(storedItem.item);
  	storedItem.price=storedItem.item.price*storedItem.qty;
    // console.log("satyapal je"+storedItem.qty+" "+storedItem.titles+" "+storedItem.item.price);
  	this.totalQty++;
  	this.totalPrice +=storedItem.item.price;
    //console.log(storedItem.item);
  };


  this.reduceByOne=function(id)
  {
    this.items[id].qty--;
    this.items[id].price-=this.items[id].item.price;
    this.totalQty--;
    this.totalPrice-=this.items[id].item.price;
    if(this.items[id].qty<=0)
    {
      delete this.items[id];
    }
  }


  this.removeItem=function(id)
  {
    this.totalQty-=this.items[id].qty;
    this.totalPrice-=this.items[id].price;
    delete this.items[id];
  }

  this.generateArray=function(){
  	var arr=[];
  	for(var id in this.items)
  	{
  		arr.push(this.items[id]);
  	}
  	return arr;
  }
}