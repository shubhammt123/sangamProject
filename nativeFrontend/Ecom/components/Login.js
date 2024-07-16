import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/slices/authSlice';


const Login = ({navigation}) => {
    const [email , setEmail] = useState();
    const [password , setPassword] = useState();

    const dispatch = useDispatch();

    const {isLoggedin} = useSelector((state)=>state.auth)

    const handleSubmit = ()=>{
        dispatch(login({email , password}))
    }

    console.log(isLoggedin)

    useEffect(()=>{
        if(isLoggedin){
            navigation.navigate("Home")
        }
    },[isLoggedin])
  return (
    <View>
      <View style={{padding : 20}}>
        <TextInput  placeholder='Email' onChangeText={setEmail} style={styles.input} />
        <TextInput  placeholder='Password' secureTextEntry onChangeText={setPassword} style={styles.input} />
        <Button title='Login' onPress={()=>{handleSubmit()}} />
        <Pressable onPress={()=>navigation.navigate("Signup")}>
            <Text>Create Account</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    input : {
        borderWidth : 1,
        borderColor : "black",
        borderStyle : "solid",
        borderRadius : 5,
        padding : 5,
        width : 200,
        marginVertical : 10
    }
})