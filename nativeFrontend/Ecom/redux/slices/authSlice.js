import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


export const login = createAsyncThunk('auth/login', async (email ) => {
    console.log(email)
  const response = await axios.post(`${process.env.API_URI}users/login`,email);
  await AsyncStorage.setItem('token', response.data.token);
  await AsyncStorage.setItem('role', response.data.role);
  return response.data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    role: null,
    status: 'idle',
    error: null,
    isLoggedin : false
  },
  reducers: {
    setAuth(state, action) {
      state.token = action.payload.token;
      state.role = action.payload.role;
      state.isLoggedin = action.payload.isLoggedin;
    },
    logout(state) {
      state.token = null;
      state.role = null;
      AsyncStorage.removeItem('token');
      AsyncStorage.removeItem('role');
      state.isLoggedin = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {

        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log(action.payload)
        state.status = 'succeeded';
        state.token = action.payload.token;
        state.role = action.payload.role;
        state.isLoggedin = true
      })
      .addCase(login.rejected, (state, action) => {
        console.log(action.error)
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setAuth, logout } = authSlice.actions;

export default authSlice.reducer;
