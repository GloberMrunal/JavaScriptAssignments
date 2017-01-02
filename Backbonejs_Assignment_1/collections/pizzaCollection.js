var app = app || {};

app.AllPizzas = Backbone.Collection.extend({
    model: app.Pizza,

    initialize: function () {
        this.bind('remove', this.onModelRemoved, this);
    },

    onModelRemoved: function (model, collection, options) {
        alert("removed"+model.get('name'));
    },
    getByName: function(name){
       return this.filter(function(val) {
          return val.get("name") === name;
        })
    }
    
});