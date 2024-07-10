import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products : [],
    status : "idle",
    error : null
};


const productSlice = createSlice({
    name : "product",
    initialState,
    reducers : {
        productData(state,action){
            state.products = action.payload
        },
        setStatus(state,action){
            state.status =  action.payload;
        },
        setError(state,action){
            state.error =  action.payload;
        },
    }

})

export const {productData , setStatus , setError} = productSlice.actions;

export default productSlice.reducer;

