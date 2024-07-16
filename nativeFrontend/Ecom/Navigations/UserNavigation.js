import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigation from './HomeNavigation';
import Cart from '../components/Cart';
import Order from '../components/Order';
import Profile from '../components/Profile';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import { useSelector } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Camera from '../components/Camera';


const Tab = createBottomTabNavigator();
const Stack =  createNativeStackNavigator();


const ProfileStack = ()=>{
  return (
    <Stack.Navigator>
      <Stack.Screen name='Profile' component={Profile} />
      <Stack.Screen name='Camera' component={Camera} />
    </Stack.Navigator>
  )
}



const UserNavigation = () => {
    const { cartItems } = useSelector((state)=>state.cart);
    // console.log(cartItem);
  return (
    <Tab.Navigator screenOptions={{tabBarActiveTintColor : "black"}}>
        <Tab.Screen name='HomeScreen' component={HomeNavigation} options={{headerShown : false , tabBarIcon : ({color})=><FontAwesome name="home" size={24} color={color} />}} />
        <Tab.Screen name='Cart' component={Cart}  options={{ tabBarIcon : ({color})=><Feather name="shopping-cart" size={24} color={color} /> , tabBarBadge : cartItems?.length}} />
        <Tab.Screen name='Order' component={Order} options={{ tabBarIcon : ({color})=><Feather name="user" size={24} color={color} />}} />
        <Tab.Screen name='Profile Screen' component={ProfileStack}  options={{ tabBarIcon : ({color})=><Feather name="user" size={24} color={Profile} />}} />
    </Tab.Navigator>
  )
}

export default UserNavigation

const styles = StyleSheet.create({})