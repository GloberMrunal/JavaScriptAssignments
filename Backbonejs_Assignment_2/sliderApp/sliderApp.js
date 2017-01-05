// create task collections for users
//Initialize it with arrays declared in taskModel.js


var john_tasks = new app.TaskCollection();
john_tasks.reset(taskSet1);

var jim_tasks = new app.TaskCollection();
jim_tasks.reset(taskSet2);

var rocio_tasks = new app.TaskCollection();
rocio_tasks.reset(taskSet3);


//debugger;
var john = new app.User({
    name: "John",
    usrImg: "../images/john.jpg",
    tasks: john_tasks

});


var jim = new app.User({
    name: "jim",
    usrImg: "../images/jim.jpg",
    tasks: jim_tasks
});

var rocio = new app.User({
    name:"Rocio",
    usrImg: "../images/rocio.jpg",
    tasks: rocio_tasks
});

var allUsers = new app.UserCollection([john,jim,rocio]);

function createTaskView(){
    //debugger;
    var usertasks = allUsers.at(app.userIndex).get('tasks').models 
    var taskCollection = new app.TaskCollection();
    taskCollection.reset(usertasks);
    var taskWindow = new app.taskWindowView({collection : taskCollection});
    taskWindow.render();
}

$(document).ready(function(){
    //debugger;
    console.log("creating user window");
    var userWindow = new app.userWindowView({collection : allUsers});
    userWindow.render();
    createTaskView();

    
});


