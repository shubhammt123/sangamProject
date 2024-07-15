import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigation from './HomeNavigation';
import Cart from '../components/Cart';
import Order from '../components/Order';
import Profile from '../components/Profile';

const Tab = createBottomTabNavigator();

const UserNavigation = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name='HomeScreen' component={HomeNavigation} options={{headerShown : false}} />
        <Tab.Screen name='Cart' component={Cart} />
        <Tab.Screen name='Order' component={Order} />
        <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
  )
}

export default UserNavigation

const styles = StyleSheet.create({})