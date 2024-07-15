import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Admin from '../components/Admin';
import HomeNavigation from './HomeNavigation';
import Profile from '../components/Profile';

const Tab = createBottomTabNavigator();


const AdminNavigation = () => {
    
  return (
    <Tab.Navigator>
        <Tab.Screen name='HomeScreen' component={HomeNavigation} options={{headerShown : false}} />
        <Tab.Screen name='Admin' component={Admin} />
        <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
  )
}

export default AdminNavigation

const styles = StyleSheet.create({})