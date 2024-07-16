import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Inpput = ({type , placeholder , name}) => {
  return (
    <View>
     <TextInput keyboardType={type}  />
    </View>
  )
}

export default Inpput

const styles = StyleSheet.create({})