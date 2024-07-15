const express = require("express");
const connectDb = require("./config/db");
const userRoutes = require("./routes/user");
const cors = require("cors");
// const multer = require("multer");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended :   true}))
app.use(cors());
connectDb();

// const upload = multer({ dest: 'uploads/' })
app.use("/uploads",express.static(path.join(__dirname,"uploads")));

app.get("/",(req,res)=>{
    res.send("Hello")
})

app.use("/users",userRoutes);

app.listen(3000,"0.0.0.0",()=>{
    console.log("Server is running on 3000")
})