var app = app || {};

// create task model 
app.Task = Backbone.Model.extend({
    default: {
        title : "",
        details : "Todo"

    }
});

app.TaskCollection = Backbone.Collection.extend({
    model:app.Task
});

var taskSet1 = [

    {   title : "TASK1",
        details : "Requirement gathering for new features "
    },
    {
        title : "TASK2",
        details : "Fix newly found bugs"
    },
    {
        title : "TASK3",
        details : "Define tasks for new functionalities"
    },
    {
        title : "TASK4",
        details : "Calculate Estimations"
    },
    {
        title : "TASK5",
        details : "Project Documentation"
    },
    {
        title : "TASK6",
        details : "Demo all new features to client"
    },
    {
        title : "TASK7",
        details : "Quality Analysis"
    },
    {
        title : "TASK8",
        details : "Final release schedule"
    }

];

var taskSet2 = [

    {
        title:"DER1",
        details: "Unit Testing"
    },
    {
        title:"GTH3",
        details:"Regression Testing"
    },
    {
        title:"KLT5",
        details: "Sanity Check"
    },
    {
        title:"DER2",
        details:"Write Test Cases for all real time scenarios"
    },
    {
        title:"DER4",
        details:"Production Testing"
    }
];

var taskSet3 = [
    {
        title:"UST12",
        details:"Dashboared main features design"
    },
    {
        title:"UST14",
        details:"Define tasks for every new  feature"
    },
    {
        title:"FIS10",
        details:"Assign tasks among  4 people"
    },
    {
        title:"FIS13",
        details:"Prepare Scrum schedule "
    },
    {
        title:"UST20",
        details:"Dashboared old features testing"
    },
    {
        title:"FIS2",
        details:"Report generation for all feature devlopments."
    }
]