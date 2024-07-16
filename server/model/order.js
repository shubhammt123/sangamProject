const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    userId : {type : String , required : true},
    customerName : {type : String , required : true},
    customerContactNumber  : {type : String , required : true},
    address : {type : String , required : true},
    pinCode : {type  :  Number , require  : true},
    product : [{
        productName : {type : String , required : true},
    productPrice : {type : Number,    required : true},
    ProductDesc : {type : String , required : true , unique : true},
    ProductCategory : {type : String , required : true},
    ProductImage : {type : String , required : true},
    }] 
});

module.exports = mongoose.model("Order",productSchema);