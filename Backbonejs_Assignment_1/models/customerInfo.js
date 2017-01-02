var app = app || {};

app.CustomerInfo = Backbone.Model.extend({
  
   validate:function(attrs){
       //debugger;
       console.log("trying to do validation");
       console.log(attrs);
       if(attrs.mobileNo.length != 10){
           return "Invalid mobile  number";
       }
       if(!attrs.mobileNo){
           //alert("please Enter mobile number");
           return "Blank mobile number";

       }
       if(attrs.address){
            if(attrs.address.length <10 || attrs.address.length >150){
                return "address either too small or too lengthy";
            }
       }
   }
});


