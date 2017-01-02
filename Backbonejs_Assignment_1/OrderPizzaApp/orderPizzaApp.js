

//create pizza models
// These are some veg pizzas
var VeggieSurprise = new app.Pizza({
 id : 1,
 name : "Veggie Surprise",
 description: "Capsicum, Onion, Sweet Corn, Paprika",
 size : "Medium",
 price: "399"
});

var PaneerDelight = new app.Pizza({
 id : 2,
 name : "Paneer Delight",
 description: "Onion, Paneer, Tomato, Sweet Corn, Jalapeno",
 size : "Medium",
 price: 350
});

var Exotica = new app.Pizza({
 id: 3,
 name : "Exotica",
 description: "Red Capsicum, Green Capsicum, Baby Corn, Black Olives, Jalapenos",
 size : "Medium",
 price: 450
});

//These are some non veg pizzas
var ChickenHotSpicy = new app.Pizza({
 id: 4,
 name : "Chicken Hot n Spicy",
 description: "Chicken Hot n Spicy, Red Paprkia, Onion, Jalapeno",
 size : "Medium",
 price: 499
});

var TikkaTreat = new app.Pizza({
 id: 5,
 name : "Tikka Treat",
 description: "Chicken Tikka, Capsicum, Onion, Mushroom",
 size : "Medium",
 price: 470,

});

//create veg pizza collection to store veg pizzas
var vegPizzas = new app.AllPizzas([VeggieSurprise, PaneerDelight, Exotica,ChickenHotSpicy,TikkaTreat]);

//create non veg pizza collection to store non veg pizzas
//var nonvegPizzas = new app.AllPizzas([]);

console.log(vegPizzas.toJSON());
//console.log(nonvegPizzas.toJSON());

var selectedPizzas = new app.AllPizzas();

function createPizzaView(){
    console.log("creating pizza view");
    var VegPizzaView = new app.allPizzaView({ collection: vegPizzas});
    //var nonVegPizzaView = new app.allPizzaView({ collection: nonvegPizzas});
    $("#mainDiv").html(VegPizzaView.render().el);
}


function confirmOrder(){
    
    selectedPizzas.reset();
    console.log("confirming order");
    var allpizzas =document.getElementsByTagName('ul')
    console.log(allpizzas);
    for(i=0;i<allpizzas.length;i++){
        //var selected = allpizzas[i].lastElementChild.checked;
        if(allpizzas[i].lastElementChild.lastElementChild.checked){
            litags = allpizzas[i].children;
            var selectedOne = new app.Pizza();
            //debugger;
            name = litags[0].innerHTML.trim();
            selectedOne.set("name",name);
            vpizza = vegPizzas.get(vegPizzas.getByName(name)[0].id);
            vpizza.set('selected', true);
            selectedOne.set("description",litags[1].innerHTML);
            selectedOne.set("size",litags[2].innerHTML.split(":")[1]);
            selectedOne.set("price",litags[3].innerHTML.split(".")[1]);
            selectedOne.set('selected', true);
            console.log("here is selected model");
            selectedPizzas.add(selectedOne);
            
        }
        
    }
    //console.log("here are all selected pizzas");
    //console.log(selectedPizzas);
    if(selectedPizzas.length > 0){
        yourSelection(selectedPizzas);
    }
    else{
        alert("Please select your pizza!!!");
    }
}


function yourSelection(selectedPizzaCollection){
    console.log("got some selected pizzas");
    var confirmSelectionView = new app.finalSelectionView({collection : selectedPizzaCollection});
    $("#mainDiv").html(confirmSelectionView.render().el);
}

function placeOrder(){
    //debugger;
    console.log("proceed for payment ");
    var CustomerInfo = new app.CustomerInfoView();
    CustomerInfo.render();
}

function removePizza(buttonObj){
    //debugger;
    name = buttonObj.parentElement.children[0].children[0].innerHTML;
    console.log("Removing pizza "+name);
    selectedPizzas.remove(selectedPizzas.getByName(name));
    yourSelection(selectedPizzas);
    
}

function addMorePizza(){   
    createPizzaView();
    console.log("Go ahead and add more pizza");
}