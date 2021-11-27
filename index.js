
var size = document.getElementById("size")
var type = document.getElementById("type")
var crust = document.getElementById("crust")
var topping = document.getElementById("toppings")
var error1 = document.getElementById("error1")
var error2 = document.getElementById("error2")
var error3 = document.getElementById("error3")
var error4 = document.getElementById("error4")
var size_price = 0;
var crust_price = 0;
var topping_price = 0;

function Pizza(size, type, crust, topping) {
    this.size = size;
    this.type = type;
    this.crust = crust;
    this.topping = topping
  
  }  

document.getElementById("btn").onclick = function(){

    ////////////CHEKIGN SIZE////////////
if(size.value === "1"){
error1.innerText = "Please select size"
}
    else if(size.value === "Small"){
        size_price = 600;
    }
    
     else if(size.value === "Medium"){
        size_price = 850;
    }
    
     else if(size.value === "Large"){
        size_price = 1200;
    }

/////////CHECKING TYPE//////////

    if(type.value === "1"){
        error2.innerText = "Please select type"
        }

////CHECKING CRUST///////////
 if(crust.value === "1"){
    error3.innerText = "Please select crust"
    }
    else if(crust.value === "None"){
        crust_price = 0;
    }
    else if(crust.value === "Crispy"){
        crust_price = 150;
    }
    
     else if(crust.value === "Stuffed"){
        crust_price = 250;
    }
    
     else if(crust.value === "Glutten-free"){
        crust_price = 350;
    }

    ////CHECKING TOPPINGS///////////
 if(topping.value === "1"){
    error4.innerText = "Please select crust"
    }
    else if(topping.value === "None"){
        topping_price = 0;
    }
    else if(topping.value === "Onions"){
        topping_price = 10;
    }
    else if(topping.value === "Tomato"){
        topping_price = 20;
    }
    
     else if(topping.value === "Cheese"){
        topping_price = 40;
    }
    
     else if(topping.value === "Salad"){
        topping_price = 10;
    }
    

    else{
        var newPizza = new Pizza(size.value ,type.value ,crust.value ,topping.value);
        console.log(newPizza)
        console.log(size_price)
        console.log(crust_price)
        console.log(topping_price)
    }

   
}