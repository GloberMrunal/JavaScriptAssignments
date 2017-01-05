var app = app || {};

// create task model 
app.Task = Backbone.Model.extend({
    default: {
        title : "",
        status : "Todo"

    }
});

app.User = Backbone.Model.extend({
   default: {
       name : "",
       usrImg: "",
       tasks : ""
   } 
});


app.UserCollection = Backbone.Collection.extend({
    model: app.User

})
  


