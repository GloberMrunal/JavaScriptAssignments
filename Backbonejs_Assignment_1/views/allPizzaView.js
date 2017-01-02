
var app = app || {};

//create view for all the pizzas
app.allPizzaView = Backbone.View.extend({
    tagname: "div",

    render: function(){
        this.collection.each(this.addPizza, this);
        var confirmOrderBtn = document.createElement('button');
        confirmOrderBtn.onclick = confirmOrder;
        confirmOrderBtn.innerHTML = "Confirm your Order";
        this.$el.append(confirmOrderBtn);

        return this;
    },

    addPizza: function(pizza){
        //debugger;
        if (pizza.get('selected')){
            var pizzaView = new app.addMorePizzaView({ model: pizza });
        }
        else{
            var pizzaView = new app.singlePizzaView({ model: pizza });
        }
        this.$el.append(pizzaView.render().el);
    }



});