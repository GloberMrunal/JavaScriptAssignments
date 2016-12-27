var contacts = [
    {"No": 1, "Name":"john", "Email": "johm@gmail.com", "Gender": "male","Remove":"","Add":""},
    {"No": 2, "Name":"mac", "Email": "mac@gmail.com", "Gender": "male","Remove":"","Add":""},
    {"No": 3, "Name":"harry", "Email": "harry@gmail.com", "Gender": "male","Remove":"","Add":""},
    {"No": 4, "Name":"chris", "Email": "chris@gmail.com", "Gender": "male","Remove":"","Add":""},
    {"No": 5, "Name":"shon", "Email": "shon@gmail.com", "Gender": "male","Remove":"","Add":""}
]

function createTable(){

    table = document.createElement("table");
    table.id = "contactsTable";
    table.style="width=100%";
    //set columns for the table
    tr = table.insertRow(-1);
    headers = getHeaders();
    for (i=0; i<headers.length; i++){
        td = tr.insertCell(-1);
        td.innerHTML = headers[i];
       
    }
    

    //set rows for the table
    for(i=0; i<contacts.length; i++){

        tr = table.insertRow(-1);
        for(j=0; j< headers.length; j++){
            td = tr.insertCell(-1);          
            if(headers[j] === "Remove"){
              remBtn = document.createElement('button');
              remBtn.innerHTML="-";
              remBtn.onclick = removeObject;
              td.appendChild(remBtn);
            }
            else if(headers[j] === "Add" && i===(contacts.length-1)){
              addBtn = document.createElement('button');
              addBtn.innerHTML = "+";
              addBtn.onclick = addNewObject;
              addBtn.id = "btnAdd";
              td.appendChild(addBtn);
              
            }
            else{
              td.innerHTML = contacts[i][headers[j]];
            }
            
            
            
        }
        
    }

  return table  
}

function removeObject(){
    tr = this.parentNode.parentNode;
    tds = tr.children;
    recNumber = parseInt(tds[0].innerHTML);
    console.log("record with id: "+recNumber+" needs to be removed");
    prepend = false;
    for(i=0;i<contacts.length;i++){
        item = contacts[i];
        if(item.No === recNumber){
            console.log("records to be deleted: "+contacts[i]);
            contacts.splice(i,1);
            prepend = true;          
        }
        if(prepend==true && i!=contacts.length){
           contacts[i].No = i+1;
        }
    }
    refreshTable(recNumber);
    
}

function refreshTable(){  
    var divContainer = document.getElementById("table");
    while(divContainer.firstChild) {
    divContainer.removeChild(divContainer.firstChild);
    }
    table = createTable();
    divContainer.appendChild(table)
}

function addNewObject(){
    this.style.visibility = 'hidden';
    console.log("Adding new object");
    table = document.getElementById('contactsTable');
    newrow = table.insertRow(-1);
    for(i=0;i<4;i++){
        td = newrow.insertCell(-1);
        ipbox = document.createElement('input');
        switch(i){
            case 0:
                ipbox.id = 'number';
                ipbox.type='number';
                break;
            case 1:
                ipbox.id = 'name';
                ipbox.type='text';
                break;
             case 2:
                ipbox.id = 'email';
                ipbox.type='text';
                break;
             case 3:
                ipbox.id = 'gender';
                ipbox.type='text';
                break;
        }
        td.appendChild(ipbox); 
    }
    $("#contactsTable").keypress(function (e) {
     if (e.which == 13) {
         document.getElementById('btnAdd').style.visibility = 'visible';
         contacts.push(
         {"No": parseInt(document.getElementById('number').value),
          "Name":document.getElementById('name').value,
          "Email": document.getElementById('email').value,
          "Gender": document.getElementById('gender').value,
          "Remove":"",
          "Add":""}) ;

         refreshTable();
         
     } 
 });
}


function getHeaders(){
    console.log("getting headers for table")
    var headers = [];

    for (i=0; i<contacts.length; i++){
        for(var key in contacts[i]){
            if(headers.indexOf(key)===-1){
                headers.push(key);
            }
        }
    }
    console.log("headers: "+headers);
    return headers;
}

$(document).ready(function(){
    console.log("Loading jason to table");
    table = createTable();
    var divContainer = document.getElementById("table");
    divContainer.appendChild(table)
});