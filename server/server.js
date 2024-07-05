const express = require("express");
const connectDb = require("./config/db");
const userRoutes = require("./routes/user");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
connectDb();


app.use("/users",userRoutes);

app.listen(3000,()=>{
    console.log("Server is running on 3000")
})