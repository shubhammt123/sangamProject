import 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Button, Dimensions, Image, ImageBackground, Modal, Pressable, StatusBar, StyleSheet, Text, View, useWindowDimensions, Platform, FlatList, TextInput } from 'react-native';
import Greet from './components/Greet';
import Box from './components/Box';
import CustomComp from './components/CustomComp';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Login from './components/Login';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  // const [data, setData] = useState([])
  // const [inputValue ,setInputValue] = useState("");
  // const [formData, setFormData] = useState({});

  // const [open, setOpen] = useState(false);
  // const { width, height } = useWindowDimensions();

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get("https://fakestoreapi.com/products");
  //     // console.log(response.data)
  //     setData(response.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // useEffect(() => {
  //   fetchData()
  // }, [])

  // const handleChange = (field , text)=>{
  //   setFormData({...formData , [field] : text})
  // }

  return (
    
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='Home' component={Home} />
          <Tab.Screen name='Login' component={Login} />
        </Tab.Navigator>
      </NavigationContainer>
    
    
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    margin: 30,
    backgroundColor: "plum"
  },
  main: {
    // backgroundColor : "lightblue",
    padding: 20,
    // shadowColor : "black",
    // shadowOffset : {
    //   width : 6,
    //   height : 6
    // },
    // shadowOpacity  : 0.6,
    // shadowRadius : 4,
    // elevation : 50,

  },
  text: {
    ...Platform.select({
      ios: {
        backgroundColor: "purple"
      },
      android: {
        backgroundColor: "yellow"
      }
    })
    // fontSize : 30,
    // backgroundColor : "yellow",
    // padding : 20,
    // textAlign : "center",
    // borderWidth : 2,
    // borderColor : "blue",
    // borderRadius : 20,
    // color : "green"
    // borderStyle : "dashed",

  },
  image: {
    width: 200,
    height: 200
  }
})
