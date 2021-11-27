
$(document).ready(function(){


    var size = $('#size')
    var type = $("#type")
    var crust = $("#crust")
    var topping = $("#toppings")
    
    var error1 = $("#error1")
    var error2 = $("#error2")
    var error3 = $("#error3")
    var error4 = $("#error4")
    
    var size_price = 0;
    var crust_price = 0;
    var topping_price = 0;
    var total = 0;
    
    var orders = []
    
    function Pizza(size, type, crust, topping, total) {
        this.size = size;
        this.type = type;
        this.crust = crust;
        this.topping = topping;
        this.total = total;
      }  
    
    $("#btn").click(function(){
      
        ////////////CHEKIGN SIZE////////////
    if(size.val() === "1"){
    error1.html("Please select size")
    }
        else if(size.val() === "Small"){
            size_price = 600;
        }
        
         else if(size.val() === "Medium"){
            size_price = 850;
        }
        
         else if(size.val() === "Large"){
            size_price = 1200;
        }
    
    /////////CHECKING TYPE//////////
    
     if(type.val() === "1"){
            error2.html("Please select type")
            }
    
    ////CHECKING CRUST///////////
     if(crust.val() === "1"){
        error3.html("Please select crust")
        }
        else if(crust.val() === "None"){
            crust_price = 0;
        }
        else if(crust.val() === "Crispy"){
            crust_price = 150;
        }
        
         else if(crust.val() === "Stuffed"){
            crust_price = 250;
        }
        
         else if(crust.val() === "Glutten-free"){
            crust_price = 350;
        }
    
        ////CHECKING TOPPINGS///////////
     if(topping.val() === "1"){
        error4.html("Please select crust")
        }
        else if(topping.val() === "None"){
            topping_price = 0;
        }
        else if(topping.val() === "Onions"){
            topping_price = 10;
        }
        else if(topping.val() === "Tomato"){
            topping_price = 20;
        }
        
         else if(topping.val() === "Cheese"){
            topping_price = 40;
        }
        
          else if(topping.val() === "Salad"){
            topping_price = 10;
        }
    
        total = size_price + crust_price + topping_price;
        var newPizza = new Pizza(size.val() ,type.val() ,crust.val() ,topping.val(), total);
             
        orders = [...orders, newPizza]
        console.log(newPizza)
        console.log(size_price)
        console.log(crust_price)
        console.log(topping_price)
        console.log(total)
        console.log(orders)

        if(orders.length === 0){
            $('#intro').html(`
            <p>No orders yet.....Bucket is empty</p>`);
    
           }
    
    else{
    
        $('#intro').html(`
        <p>No of orders: ${orders.length}</p>`);
    
    
    }

    })

    

});



   

  

