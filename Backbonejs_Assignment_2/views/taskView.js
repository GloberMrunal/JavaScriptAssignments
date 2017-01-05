app = app || {};
var task = "<p style='width:100%; height:100%; fontSize:100px;padding-top:60px'><%= title %></p>";


app.TasksView = Backbone.View.extend({
    tagName: 'td',
    //el: "#usertasks",

    template: _.template(task),
    events: {
        "click p" : "open"
    },
    initialize: function(){
        //debugger;
        this.el.style.width= '200px';
        this.el.style.height = '150px';
        this.el.style.align = 'centre';
    },
    render: function(){
        //debugger;
        var taskTemplate = this.template(this.model.toJSON());
        this.$el.append(taskTemplate);
        return this;
    },
    open: function(){
        //debugger;
        // card = document.createElement('div');
        // card.innerHTML = this.model.get('details');
        $("#secondRow").empty();
        $("#secondRow").append(this.model.get('details'));
        console.log("you clicked a task");
    }


});

app.taskWindowView = Backbone.View.extend({
    el:"#taskRow",
    initialize: function(){
        this.taskCounter = 0;
    },
    events: {
    "click #taskRightNavBtn" : "getNextTasks",
    "click #taskLeftNavBtn" : "getPrevTasks" 
    
    },

    render: function(){
        //debugger;
        $('#usertasks').empty();//clear task bar
        for(i=0;i<5;i++){
            task = this.collection.at(this.taskCounter);
            this.addTasks(task)//add tasks to task bar
        }
        this.enableDesableBtn();
        return this;
    },

    addTasks: function(task){
        //debugger;
        if(this.taskCounter < this.collection.length){
            var newTask = new app.Task(task.toJSON());
            //console.log(newTask);
            var taskView = new app.TasksView({model:newTask});
            tdTasks = document.getElementById('usertasks');  
            tdTasks.append(taskView.render().el);
            this.taskCounter +=1;
        }

    },

    getNextTasks: function(){
        //debugger;
        if(this.taskCounter<this.collection.length){
            this.render();
        }

        console.log("trying to fetch next tasks");
    },

    getPrevTasks: function(){
        //debugger;
        console.log("trying to fetch previous tasks");
        this.taskCounter = this.collection.length - (this.taskCounter%5+5);
        this.render();
    },
    
    enableDesableBtn: function(){
        if(this.taskCounter <= 5){
            document.getElementById('taskLeftNavBtn').disabled = true;
        }
        else{
            document.getElementById('taskLeftNavBtn').disabled = false;
        }

        if(this.taskCounter >= this.collection.length){
            document.getElementById('taskRightNavBtn').disabled = true;
        }
        else{
            document.getElementById('taskRightNavBtn').disabled = false;
        }
    }


});