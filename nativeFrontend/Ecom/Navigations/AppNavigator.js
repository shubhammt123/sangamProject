import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AuthNavigation from './AuthNavigation'
import AdminNavigation from './AdminNavigation';
import UserNavigation from './UserNavigation';

const AppNavigator = () => {
    const [token ,  setToken] = useState(true);
    const [role , setRole] =    useState("user");

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

