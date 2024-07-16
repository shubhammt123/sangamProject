import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

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
            AsyncStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        setStatus(state, action) {
            state.status = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        },
        remove(state, action) {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
            AsyncStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        setCartItems(state, action) {
            state.cartItems = action.payload;
        }
    }
});

export const { add, remove, setStatus, setError, setCartItems } = cartSlice.actions;

export const fetchCartItems = () => async (dispatch) => {
    try {
        const cart = await AsyncStorage.getItem("cart");
        if (cart !== null) {
            dispatch(setCartItems(JSON.parse(cart)));
        }
    } catch (error) {
        dispatch(setError(error.toString()));
    }
};

export default cartSlice.reducer;
