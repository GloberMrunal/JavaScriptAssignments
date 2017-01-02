var app = app || {};
app.selectedPizzaHtml = "<ul><li style='color: Blue'></strong><%= name %> </li><li></strong><%= description %></li><li>Size: </strong><%= size %></li><li>Price: Rs.</strong><%= price %></li><li name='selection'><input type='checkbox' name='selection' checked='true'>Add to Cart</input></li></ul>";
app.addMorePizzaView = Backbone.View.extend({
    tagname: "article",
    template: _.template(app.selectedPizzaHtml),
    render: function(){
        var pizzaTemplate = this.template(this.model.toJSON());
        this.$el.html(pizzaTemplate);
        return this;
    }
    
    
})