import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigation from './HomeNavigation';
import Cart from '../components/Cart';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../components/Login';
import Signup from '../components/Signup';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const LoginStack = ()=>{
    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Signup' component={Signup} />
        </Stack.Navigator>
    )
}


const AuthNavigation = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name='HomeScreen' component={HomeNavigation} options={{headerShown : false}} />
        <Tab.Screen name='Cart' component={Cart} />
        <Tab.Screen name='LoginScreen' component={LoginStack} />
    </Tab.Navigator>
  )
}

export default AuthNavigation

const styles = StyleSheet.create({})