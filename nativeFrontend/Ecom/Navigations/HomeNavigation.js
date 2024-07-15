import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../components/Home';
import Product from '../components/Product';

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Product' component={Product} />
    </Stack.Navigator>
  )
}

export default HomeNavigation

const styles = StyleSheet.create({})