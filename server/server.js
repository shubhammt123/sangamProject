const express = require("express");
const connectDb = require("./config/db");
const userRoutes = require("./routes/user");
const productRoute = require("./routes/product");
const orderRoutes = require("./routes/order")
const cors = require("cors");
// const multer = require("multer");
const path = require("path");
const stripe = require("stripe")("your-secret-key");

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
app.use("/products",productRoute);
app.use("/orders",orderRoutes);

app.post("/create-checkout-session",async (req,res)=>{
    const { products } = req.body;
    const lineItems = products.map((product)=>(
        {
            price_data : {
                currency : "inr",
                product_data : {
                    name : product.productName,
                },
                unit_amount : product.productPrice * 100
            },
            quantity : product.quantity 
        }
    ));

    const session = await stripe.checkout.sessions.create({
        payment_method_types : ["card"],
        line_items : lineItems,
        mode : "payment",
        success_url : "http://localhost:5173/paymentsuccess",
        cancel_url : "http://localhost:5173/cancelPayment"
    });
    res.json({id : session.id});

})



app.listen(3000,"0.0.0.0",()=>{
    console.log("Server is running on 3000")
})