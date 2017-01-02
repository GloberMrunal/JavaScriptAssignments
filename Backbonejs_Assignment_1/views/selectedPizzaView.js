var app = app || {};

app.selectedPizzaHtml = "<ul><li><%= name %></li><li><%= price %></li> </ul> <button onclick='removePizza(this)'>Cancel</button> </br>";
app.selectedPizzaView = Backbone.View.extend({
    tagname: 'div',
    
    template: _.template(app.selectedPizzaHtml),

 
    model: app.Pizza,


    render: function(){
        var pizzaTemplate = this.template(this.model.toJSON());
        this.$el.html(pizzaTemplate);
        return this;
    },

});