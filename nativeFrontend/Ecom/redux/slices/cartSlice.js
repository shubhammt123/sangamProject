import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { insertCartItem, removeCartItem , fetchCartItems as fetchCartItemsDb } from "../../db/db";

const initialState = {
    cartItems: [],
    status: "idle",
    error: null
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add(state, action) {
            state.cartItems.push(action.payload);
            insertCartItem(action.payload);
        },
        setStatus(state, action) {
            state.status = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        },
        remove(state, action) {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
            removeCartItem(action.payload);
        },
        setCartItems(state, action) {
            state.cartItems = action.payload;
        }
    }
});

export const { add, remove, setStatus, setError, setCartItems } = cartSlice.actions;

export const fetchCartItems = () => async (dispatch) => {
    try {
        fetchCartItemsDb((items)=>{
            dispatch(setCartItems(items));
        })
    } catch (error) {
        dispatch(setError(error.toString()));
    }
};

export default cartSlice.reducer;
