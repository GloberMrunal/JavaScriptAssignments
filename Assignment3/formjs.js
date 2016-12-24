function getName(){
    return document.getElementById("myName").value
};

function getId(){
    return document.getElementById("myId").value
};

function getEmail(){
    return document.getElementById("myEmail").value
};

function validateForm(Name, Id, Email){
    flag = 0  //console.log("validating form ")
    var Name = getName() //document.getElementById("myName").value;
    
    var Id = getId() //document.getElementById("myId").value;

    var Email = getEmail() //document.getElementById("myEmail").value;

    //validation for name  field using reguler expression
    var NamePattern = new RegExp("^[a-zA-Z]+$"); //pattern to match only alphabates 
    if (!NamePattern.test(Name)){
        alert("Enter Valid Name")
        flag = 1
    }

    //validation for id field   
    if (this.Id<1){
        alert("Invalid Id")
        flag = 1
    }
 
    //validation for email field

    var EmailPattern = new RegExp("^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$");
    if (!EmailPattern.test(Email)){
        alert("Invalid Email id")
        flag = 1
    }
    return ((flag==0)? true:false)
}



function AddEnryToTable(){
    
    var validForm = validateForm()
    if(validForm){
        
        //inserting data into table
        var table = document.getElementById("myTable");
        var row = table.insertRow()
        row.insertCell(0).innerHTML = getName();
        row.insertCell(1).innerHTML = getId();
        row.insertCell(2).innerHTML = getEmail();

        //create node for edit button
        
        var editBtn = document.createElement("button");
        editBtn.innerHTML = "Edit";
        editBtn.style = "width:100%";
        editBtn.onclick = editEntry; // call function editEntry to edit selected record
        var td1 = document.createElement("td");
        td1.appendChild(editBtn);
        row.appendChild(td1)

        // create node for delete button

        var delBtn = document.createElement("button");
        delBtn.innerHTML = "Delete";
        delBtn.style = "width:100%";
        var td2 = document.createElement("td");
        td2.appendChild(delBtn);
        row.appendChild(td2);
        delBtn.onclick = deleteEntry; //call function deleteetry to delete selected record
       
        //clear fields after adding to table
        clearFields()
    } 
}
function editEntry(){
    
    document.getElementById("myId").disabled = true;
    trNode = this.parentNode.parentNode;
    var tds = trNode.children; //get all tds from the row
    // fill input boxes with selected rows contents
    document.getElementById("myName").value = tds[0].innerHTML; 
    document.getElementById("myId").value = parseInt(tds[1].innerHTML);
    document.getElementById("myEmail").value = tds[2].innerHTML;
}
function clearFields(){
    document.getElementById("myName").value = '';
    document.getElementById("myId").value = '';
    document.getElementById("myEmail").value = '';
}

function saveRecord()
{
    var table = document.getElementById("myTable");
    var id = parseInt(document.getElementById("myId").value); // id field for record that needs to be edited
    for(i = 0 ; i < table.rows.length; i++) 
    {
        var row = table.rows[i];
        var currId = parseInt(row.cells[1].innerHTML); //get value of id field for the row
        if(currId === id){
            row.cells[0].innerHTML = document.getElementById("myName").value;
            row.cells[2].innerHTML = document.getElementById("myEmail").value;
        }
    }
    document.getElementById("myId").disabled = false;
}

function deleteEntry()
{   
    
    trNode = this.parentNode.parentNode;
    var rownumber = trNode.rowIndex
    document.getElementById("myTable").deleteRow(rownumber);


}