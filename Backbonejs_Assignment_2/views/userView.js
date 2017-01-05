app = app || {};
app.userIndex = 0;
var userWindow = "<i class='fa fa-user-circle' aria-hidden='true'><img src=<%= usrImg %>> </img></i>";

app.userWindowView = Backbone.View.extend({
    el:"#userRow",
    template: _.template(userWindow),

    events: {
    "click #userRightNavBtn" : "getNextUser",
    "click #userLeftNavBtn" : "getPrevUser" 
    
    },

    render: function(){
        //debugger;
        //var userTemplate = this.template(this.model.toJSON());
        
        var userTemplate = this.template(this.collection.at(app.userIndex).toJSON());
        $(this.$el.children()[1]).html(userTemplate);
        this.enableDesableBtns();
        createTaskView();
        //createTaskView(usertasks);
        return this;       
    },
    
    getNextUser: function(){
        //debugger;
        app.userIndex += 1;
        if(app.userIndex < allUsers.length){             
            this.render();
            
        }
        
    },

    getPrevUser: function(){
        //debugger;
        app.userIndex -= 1;
        if(app.userIndex >= 0){
            this.render();
        }
    },

    enableDesableBtns: function(){
        //debugger;
        index = app.userIndex;
        if(index<=0 || allUsers.length==1){
            document.getElementById('userLeftNavBtn').disabled = true;
        }
        else{
            document.getElementById('userLeftNavBtn').disabled = false;
        }

        if(index >= allUsers.length-1){
            document.getElementById('userRightNavBtn').disabled = true;
        }
        else{
            document.getElementById('userRightNavBtn').disabled = false;
        }

    }
    
});

