const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstName : {type : String , require : true},
    lastName : {type : String ,    require : true},
    email : {type : String , require : true , unique : true},
    password : {type : String , require : true},
    contactNumber : {type : String , require : true}
});

module.exports = mongoose.model("User",userSchema);