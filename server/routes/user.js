const express = require("express");
const { getAllUsers  ,  createUser , updateUser , deleteUser} = require("../controller/user")

// console.log(userController);

const router = express.Router();

router.get("/getAllUsers",getAllUsers);  
router.post("/createUser",createUser);
router.put("/updateUser/:id",updateUser);
router.delete("/deleteUser/:id",deleteUser);

module.exports = router;