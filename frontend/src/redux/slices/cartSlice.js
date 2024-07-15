import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems : JSON.parse(localStorage.getItem("cart")) || [],
    status : "idle",
    error : null
};


const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        add(state,action){
            state.cartItems.push(action.payload);
            localStorage.setItem("cart",JSON.stringify(state.cartItems));
        },
        setStatus(state,action){
            state.status =  action.payload;
        },
        setError(state,action){
            state.error =  action.payload;
        },
        remove(state,action){
            state.cartItems.filter((item)=>item.id !== action.payload)
        }
    }

})

export const {add , remove} = cartSlice.actions;

export default cartSlice.reducer;

