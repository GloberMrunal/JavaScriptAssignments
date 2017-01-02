var app = app || {};

app.CustomerInfoView = Backbone.View.extend({
        
        el:'#mainDiv',
        render:function(){
            this.$el.html("<form>Enter your phone number:<br><input type='number' name='phoneNo', id='phone'><br><br>Address:<br><input type='text' name='address' id='addr'></form>");
            this.$el.append("</br><button id='deliver'>Deliver Here</button>");
            return this;
        },

        events:{
            'click #deliver':'deliver'

        },

        deliver: function(){
            //debugger;
            mobileNo = document.getElementById('phone').value;
            address = document.getElementById('addr').value;
            var Customer = new app.CustomerInfo();
            mflag = Customer.set("mobileNo", mobileNo,{validate:true});
            adflag = Customer.set("address", address ,{validate:true});
            //console.log(Customer);
            if(Customer.validationError){
                alert(Customer.validationError);
            }
            else{
            this.$el.html("<h2>Thank you "+user1.get('name')+" your order is placed. We will contact you for delivery on mobile n0: "+Customer.get('mobileNo')+"</h2>");
            return this;
            }
        }
    });
