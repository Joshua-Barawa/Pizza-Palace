
var size = document.getElementById("size").value
var type = document.getElementById("type")
var crust = document.getElementById("crust")
var topping = document.getElementById("toppings")
var price = 0;

switch(size){
    case "Small":
        price = 600;
}

function Pizza(size, type, crust, topping, price) {
    this.name = size;
    this.type = type;
    this.crut = crust;
    this.topping = topping
    this.price = price;
  }  

document.getElementById("btn").onclick = function(){
    var newPizza = new Pizza(size.value ,type.value ,crust.value ,topping.value, price);
    console.log(newPizza)
    console.log(price)
}