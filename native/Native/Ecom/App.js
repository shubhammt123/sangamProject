
import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Button, Dimensions, Image, ImageBackground, Modal, Pressable, StatusBar, StyleSheet, Text, View, useWindowDimensions, Platform, FlatList, TextInput } from 'react-native';
import Greet from './components/Greet';
import Box from './components/Box';
import CustomComp from './components/CustomComp';
import axios from 'axios';

export default function App() {
  const [data, setData] = useState([])
  const [inputValue ,setInputValue] = useState("");
  const [formData, setFormData] = useState({});

  const [open, setOpen] = useState(false);
  const { width, height } = useWindowDimensions();

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      // console.log(response.data)
      setData(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  const handleChange = (field , text)=>{
    setFormData({...formData , [field] : text})
  }

  return (
    <View style={styles.container}>
      {/* <ActivityIndicator size="large"  color="midnightblue" animating={false} /> */}
      <View style={styles.main}>

        <Text style={styles.text}>Hello Sangam</Text>
        <CustomComp />
      </View>
      <View>
        {/* {data.map((item)=>(
          <View key={item.id} >
            <Text>{item.title}</Text>
          </View>
        ))} */}
        {/* <FlatList data={data} renderItem={(item)=>{
          console.log(item)
          return (
            <View>
              <Text>{item.item.title}</Text>
            </View>
          )
        }} /> */}
        <TextInput placeholder='Enter Email' autoCorrect={false} onChangeText={(text)=>{handleChange("email",text)}} />
        <TextInput placeholder='Enter Password' autoCorrect={false} onChangeText={(text)=>{handleChange("password" , text)}} />
        
      </View>
      {/* <Button title='Show Width' onPress={()=>{
      console.log(Platform.OS);
     
    }} /> */}
      {/* <View style={{borderWidth : 1 }}>
    <Box style={{backgroundColor : "brown"}}>Box 1</Box>
    <Box style={{backgroundColor : "yellow"}}>Box 2</Box>
    <Box style={{backgroundColor : "lightgreen"}}>Box 3</Box>
    <Box style={{backgroundColor : "lightblue"}}>Box 4</Box>
    </View> */}
      {/* <View>
      <View style={{backgroundColor : "brown" , width : 100 , height : 100 , justifyContent : "center" , alignItems : "center" ,}}>
        <Text  style={{color : "white" , fontSize : width > 500 ? 50 : 20}}>1</Text>
      </View>
      <View style={{backgroundColor : "blue" , width : 100 , height : 100 , justifyContent : "center" , alignItems : "center"}}>
        <Text  style={{color : "white"}}>2</Text>
      </View>
      <View style={{backgroundColor : "yellow" , width : 100 , height : 100 , justifyContent : "center" , alignItems : "center"}}>
        <Text  style={{color : "black" }}>3</Text>
      </View>
      <View style={{backgroundColor : "green" , width : 100 , height : 100 , justifyContent : "center" , alignItems : "center"}}>
        <Text  style={{color : "white"}}>4</Text>
      </View>
    </View> */}
      {/* <Greet name="Shubham" />
    <Greet name="Vinay" />
    <Greet name="Shubham" /> */}
      <Box />
      {/* <Button title='Alert' onPress={()=>{Alert.alert("Invalid Data","Incorret Dob",[{
      text : "cancel",
      onPress : ()=>{console.log("Cancel Clicked")}
    },
    {
      text : "Ok",
      onPress : ()=>{console.log("Ok Clicked")}
    }
    ])}} /> */}

      {/* <Image source={require("./assets/adaptive-icon.png")} /> */}
      {/* <Image source={{uri : "https://picsum.photos/200"}} style={styles.image} />
    <Image source={{uri : "https://picsum.photos/300"}} style={styles.image} />
    <Image source={{uri : "https://picsum.photos/400"}} style={styles.image} />
    <Image source={{uri : "https://picsum.photos/500"}} style={styles.image} />
    <Image source={{uri : "https://picsum.photos/200"}} style={styles.image} />
    <Image source={{uri : "https://picsum.photos/200"}} style={styles.image} />
    <Image source={{uri : "https://picsum.photos/200"}} style={styles.image} /> */}
      {/* <ImageBackground source={{uri : "https://picsum.photos/200"}} style={{flex : 1}}>
    <View style={{width : 200 , height  : 200   , backgroundColor :   "red"}}>
      <Text>Shubham</Text>
    </View>
    </ImageBackground> */}
      {/* <Button title='Submit' color="midnightblue" onPress={()=>{console.log("Submit button clicked")}}  /> */}
      <Pressable onPress={() => { setOpen(true) }}>
        {/* <StatusBar backgroundColor ="lightgreen" barStyle="lignt-content"  /> */}
        {/* <View style={{width  : 200, height   : 100,backgroundColor : "orange"}}>
      <Text>Submit</Text>
    </View> */}
      </Pressable>
      {/* <Modal visible={open} onRequestClose={()=>{setOpen(false)}} animationType='slide' presentationStyle='pagesheet'>
      <View>
        <Text>Modal Component</Text>
        <Button title='Close Modal' onPress={()=>{setOpen(false)}} />
      </View>

    </Modal> */}
    </View>
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
