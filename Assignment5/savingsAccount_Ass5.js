/*
   Assignment 5: savings account
*/

function savingsAccount(){
    this.balance = 0, //declare 'balance' as global 

    this.deposit = function(amount){ // function to deposite amount
        this.balance += amount; //update model
        console.log("depositing "+amount);
        console.log("successfully deposited "+amount+", New balance is "+this.balance );
    },

   this.withdraw = function(amount){ // function to withdraw an amount
        if (amount> this.balance){ //if balance is less than withdraw amount produce alert;
            alert("Not sufficient balance to withdraw, current balance is "+this.balance);
        }
        else{
            console.log("withdrawing "+amount);
            this.balance -= amount;
            console.log("Successfully withdrawn "+amount+" New balance is "+this.balance);
        }
    },

    this.checkBalance = function(){
        console.log("your current balance is: "+this.balance)
    }
}


$(document).ready(function(){
    console.log("on page")
})