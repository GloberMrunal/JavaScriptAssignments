var app = app || {};

//create view for all the pizzas
app.finalSelectionView = Backbone.View.extend({
    tagname: "div",
    initialize: function(){
         this.totalAmount = 0;
    },
    template: _.template("<br><span><strong>Total Price: <%= total %></span><br><br>"),

    render: function(){
        var h3 = document.createElement('h3');
        h3.innerHTML = "Your slection";
        this.$el.append(h3);
        
        this.collection.each(this.addSelection, this);
        var total = this.template({'total': this.totalAmount});
        this.$el.append(total);

        var placeOrderBtn = document.createElement('button');
        placeOrderBtn.onclick = placeOrder;
        placeOrderBtn.innerHTML = "Place your Order";
        this.$el.append(placeOrderBtn);

        var addMoreBtn = document.createElement('button');
        addMoreBtn.innerHTML = "Add More Pizzas";
        addMoreBtn.onclick = addMorePizza;
        this.$el.append(addMoreBtn);
        return this;

    },

    addSelection: function(selectedPizza){
        //debugger; 
        this.totalAmount += parseInt(selectedPizza.get('price'));      
        var pizzaView = new app.selectedPizzaView({ model: selectedPizza });
        this.$el.append(pizzaView.render().el);
    },

    removeSelection: function(selectedPizza){

    }



});