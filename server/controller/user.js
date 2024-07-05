const User = require("../model/user");

exports.getAllUsers = async (req,res)=>{
    try {
        const users = await User.find();
        res.status(200).send({message : "User Fetched" , data : users});
    } catch (error) {
        res.status(500).send({message : "error" , error : error});
    }
}

exports.createUser = async (req,res)=>{
    const { firstName , lastName , email , password , contactNumber } = req.body;

    try {
        const existingUser = await User.findOne({email : email});
        
        if(existingUser){
            return res.status(400).send({message : "user already exists"});
        }
        const user = new User({firstName : firstName , lastName : lastName , email : email , password : password , contactNumber : contactNumber});

        await user.save();
        return res.status(201).send({message : "User Created", data : user})
    } catch (error) {
        return res.status(500).send({message : "error", error : error});
    }
}

exports.updateUser = async (req,res)=>{
    const id = req.params.id;
    const reqBody = req.body;
    try {
        const existingUser = await User.findById(id);
        if(!existingUser){
            return res.status(404).send({message : "user not found"});
        }
        const user = await User.findByIdAndUpdate(id,reqBody,{new :true});
        res.status(202).send({message : "User Updated",data : user});
    } catch (error) {
        console.log(error)
        res.status(500).send({message : "error"});
    }
}

exports.deleteUser = async (req,res)=>{
    const id = req.params.id;
    try {
        const user = await User.findByIdAndDelete(id);
        res.status(200).send({message : "User deleted",data : user});
    } catch (error) {
        console.log(error);
        res.status(500).send({message : "error"})
    }
    
}