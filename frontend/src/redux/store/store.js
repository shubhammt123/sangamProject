import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice";
import productReducer from "../slices/productSlice";
import authSlice from "../slices/authSlice";
 
const store = configureStore({
    reducer : {
        auth : authSlice,
        cart : cartReducer,
        product : productReducer
    }
})

export default store;