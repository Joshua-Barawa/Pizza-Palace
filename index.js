
var size = document.getElementById("size")
var type = document.getElementById("type")
var crust = document.getElementById("crust")
var topping = document.getElementById("toppings")

var prices = {
    small: {
     price: 600
    },
    large: {
        price: 850
       }
}

function Pizza(size, type, crust, topping) {
    this.name = size;
    this.type = type;
    this.crut = crust;
    this.topping = topping
  }  

document.getElementById("btn").onclick = function(){
    var newPizza = new Pizza(size.value ,type.value ,crust.value ,topping.value);
    console.log(newPizza)
    console.log(size.innerHTML)
}