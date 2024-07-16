import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AuthNavigation from './AuthNavigation'
import AdminNavigation from './AdminNavigation';
import UserNavigation from './UserNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../redux/slices/authSlice';

const AppNavigator = () => {

  const dispatch = useDispatch();
    
  useEffect(()=>{
    const fetchToken = async ()=>{
      try {
        const token = await AsyncStorage.getItem("token");
        const role = await AsyncStorage.getItem("role");
        if(token && role){
          dispatch(setAuth({token , role , isLoggedin : true}))
        }
      } catch (error) {
        console.log("not found")
      }
    }
    fetchToken();
  },[]);

  const {token , role} = useSelector((state)=>state.auth)

    if(!token){
        return (
            <AuthNavigation />
        )
    }
  return (
    role === "admin" ? <AdminNavigation /> : <UserNavigation />
  )
}

export default AppNavigator

