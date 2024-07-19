import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigation from './HomeNavigation';
import Cart from '../components/Cart';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../components/Login';
import Signup from '../components/Signup';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import { useSelector } from 'react-redux';

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
  const { cartItems } = useSelector((state)=>state.cart);
  return (
    <Tab.Navigator>
        <Tab.Screen name='HomeScreen' component={HomeNavigation} options={{headerShown : false , tabBarIcon : ()=><FontAwesome name="home" size={24} color="black" />}} />
        <Tab.Screen name='Cart' component={Cart}  options={{ tabBarIcon : ({color})=><Feather name="shopping-cart" size={24} color={color} /> , tabBarBadge : cartItems?.length}} />

        <Tab.Screen name='LoginScreen' component={LoginStack} options={{headerShown : false}} />
    </Tab.Navigator>
  )
}

export default AuthNavigation

const styles = StyleSheet.create({})