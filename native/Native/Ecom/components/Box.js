import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Box = ({style, children}) => {
  return (
    <View>
      <Text style={[styles.text , style]}>{children}</Text>
    </View>
  )
}

export default Box

const styles = StyleSheet.create({
    text   : {
        padding : 20,
        textAlign : "center",
        fontSize : 20,
        fontWeight : "700",
        // backgroundColor : "lightblue"
    }
})