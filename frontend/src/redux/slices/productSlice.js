import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const STATUES = Object.freeze({
    IDLE  : "idle",
    LOADING : "loading",
    ERROR : "error"
})

const initialState = {
    products : [],
    status : "idle",
    error : null
};

export const fetchData = createAsyncThunk("product/fetchData", async ()=>{
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
})
const addProduct = createAsyncThunk("product/addProduct", async (data)=>{
    const response = await axios.post("http://localhost:3000/product/addProduct",data);
    return response.data;
})


const productSlice = createSlice({
    name : "product",
    initialState,
    reducers : {
        // productData(state,action){
        //     state.products = action.payload
        // },
        // setStatus(state,action){
        //     state.status =  action.payload;
        // },
        // setError(state,action){
        //     state.error =  action.payload;
        // },
    },
    extraReducers : (builder)=>{
        builder
        .addCase(fetchData.pending , (state,action)=>{
            state.status = STATUES.LOADING
        })
        .addCase(fetchData.fulfilled , (state,action)=>{
            state.products = action.payload;
            state.status = STATUES.IDLE;
        })
        .addCase(fetchData.rejected,(state , action)=>{
            state.status = STATUES.ERROR;
            state.error = action.payload;
        })
        .addCase(addProduct.pending,()=>{

        })
        .addCase(addProduct.fulfilled,()=>{})
        .addCase(addProduct.rejected  ,()=>{})
    }

})

export const {productData , setStatus , setError} = productSlice.actions;

export default productSlice.reducer;


// export function fetchData(){
//     return async function fetchDataThunk(dispatch,getState){
//         dispatch(setStatus(STATUES.LOADING));
//         try {
//            const response = await axios.get("https://fakestoreapi.com/products");
//            dispatch(setStatus(STATUES.IDLE));
//            dispatch(productData(response.data));
//         } catch (error) {
//             dispatch(setStatus(STATUES.ERROR));
//             dispatch(setError(error));
//         }
//     }
// }


// Add product -- admin
// update -- admin
// delete - admin
// fetchProduct --- "/"
// redux toolkit frontend plus backend

// create order - user
// show all order - admin
// show my order - user
// update order - admin
// delete order - admin and user