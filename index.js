
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
    var price = 0;
    var total =0;
    var orders = []
    
    function Pizza(size, type, crust, topping, price) {
        this.size = size;
        this.type = type;
        this.crust = crust;
        this.topping = topping;
        this.price = price;
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
        error4.html("Please select toppings")
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
    
        
        price = size_price + crust_price + topping_price;
        var newPizza = new Pizza(size.val() ,type.val() ,crust.val() ,topping.val(), price);
             total = total + price
        orders = [...orders, newPizza]
        
        $('#table').append(`
        <tr>
        <td>${newPizza.size}</td>
         <td>${newPizza.type}</td>
         <td>${newPizza.crust}</td>
         <td>${newPizza.topping}</td>
         <td>${newPizza.price}</td>
        </tr>
        `)

        $('#total').html(total)
    })


    $('#check-btn').click(function(){
        if(orders.length === 0){
            alert("Please make an order first")
        }
        console.log(total)
    })

    $('#deliver-btn').click(function(){
        if(orders.length === 0){
            alert("Please make an order first")
        }
        else{ console.log(total + 150)}
       
    })

});



   

  

