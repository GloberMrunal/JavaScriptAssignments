
var validEmpForm = true;

function validateEmpForm(){
    var name = document.getElementById("empFirstName");
    var NamePattern = new RegExp("^[a-zA-Z]+$"); //pattern to match only alphabates 
    if (!NamePattern.test(name.value)){
        $("</br><span style='color:red'>Name should contain only characters</span>").insertAfter(name);
        console.log("invalid name");
    }

    var lname = document.getElementById("empLastName");
    if(!NamePattern.test(lname.value)){
        $("</br><span style='color:red'>Last Name should contain only characters</span>").insertAfter(lname);
        console.log("invalid last name");
    }

    var email = document.getElementById("empEmail");
    var EmailPattern = new RegExp("^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$");
    if (!EmailPattern.test(email.value)){
        $("</br><span style='color:red'>Enter valid email</span>").insertAfter(email);
        
    }

    var address = document.getElementById("empAddress");
    if(address.value.length!=0){
        if(address.value.length < 10 || address.value.length >150){
            $("</br><span style='color:red'>Address should have min 10 & max 150 characters</span>").insertAfter(address);
        }
    }
}

function deleteEndRows(){
    var table = document.getElementById("tblEmployee");
    for(i=table.rows.length - 2; i >= 6; i--)
    {
        table.deleteRow(i);
    }
}

function empHideAll(){
    var table = document.getElementById("tblEmployee");
    var newRow = table.insertRow(6);
    var newCell = newRow.insertCell(0);
    newCell.innerText = "Anuraj";
    
    var newCell1 = newRow.insertCell(1);

    var tempTable = document.createElement('table');
    var tempRow = tempTable.insertRow(0);
    var textNode = document.createElement('input');
    textNode.setAttribute("type", "radio");
    tempRow.insertCell(0).appendChild(textNode);
    tempRow.insertCell(1).innerText = "Somthing";
    newCell1.appendChild(tempTable);

}

function enableElement(element){
    element.style.visibility = "visible";
    if(element.children[1].children[0].type!="radio"){
        element.children[1].children[0].required =true;
    }
}
// addEventListener("focusout", event);



function showExperiance(){
    var position = document.getElementById("position").value;
    console.log("you selected option:"+position);
        deleteEndRows();
        var table = document.getElementById("tblEmployee");
        var newRow = table.insertRow(6);
        var newCell = newRow.insertCell(0);
        var textNode = document.createElement('input')
        newRow.insertCell(1).appendChild(textNode);
        var newRow = table.insertRow(7);
        

    if(position=="HTML Developer"){
        newCell.innerText = "Years of experience in HTML/CSS";
        newRow.insertCell(0).innerText = "Worked on bootstrap";
    }else if(position==="JavaScript Developer"){
        newCell.innerText = "Years of experience in JavaScript";
        newRow.insertCell(0).innerText = "Worked on Node.js";
    }else if(position==="Java Developer"){
        newCell.innerText = "Years of experience in Java";
        newRow.insertCell(0).innerText = "Worked on Hibernate";
    }else if(position==="Database Developer"){
        newCell.innerText = "Years of experience in Databases";
        newRow.insertCell(0).innerText = "Worked on Oracle";
    }

        textNode.setAttribute("type", "number");
      
        
        newCell1 = newRow.insertCell(1);
        
        var tempTable = document.createElement('table');
        var tempRow = tempTable.insertRow(0);
        var textNode = document.createElement('input');
        textNode.setAttribute("type", "radio");
        textNode.name = "yesNo";
        tempRow.insertCell(0).appendChild(textNode);
        tempRow.insertCell(1).innerText = "Yes";
        tempRow = tempTable.insertRow(1);
        textNode = document.createElement('input');
        textNode.name = "yesNo";
        textNode.setAttribute("type", "radio");
        tempRow.insertCell(0).appendChild(textNode);
        tempRow.insertCell(1).innerText = "No";
        newCell1.appendChild(tempTable);
    
}

function validateStudForm(){
   var name = document.getElementById("studFirstName");
    var NamePattern = new RegExp("^[a-zA-Z]+$"); //pattern to match only alphabates 
    if (!NamePattern.test(name.value)){
        $("</br><span style='color:red'>Name should contain only characters</span>").insertAfter(name);
        console.log("invalid name");
    }

    var lname = document.getElementById("studLastName");
    if(!NamePattern.test(lname.value)){
        $("</br><span style='color:red'>Last Name should contain only characters</span>").insertAfter(lname);
        console.log("invalid last name");
    }

    var email = document.getElementById("studEmail");
    var EmailPattern = new RegExp("^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$");
    if (!EmailPattern.test(email.value)){
        $("</br><span style='color:red'>Enter valid email</span>").insertAfter(email);
        
    }

    var address = document.getElementById("studAddress");
    if(address.value.length!=0){
        if(address.value.length < 10 || address.value.length >150){
            $("</br><span style='color:red'>Address should have min 10 & max 150 characters</span>").insertAfter(address);
        }
    }

}


$(document).ready(function(){
 //empHideAll()
 //enableElement(document.getElementById("htmlcssExperience"));
 //enableElement(document.getElementById("bootstrap"));
    
 showExperiance();

})