import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Product = ({route}) => {
    const {product} = route.params
  return (
    <View>
        <Image source={{uri : product.image}} style={{width : 300 , height : 400}} />
      <Text>{product.title}</Text>
    </View>
  )
}

export default Product

const styles = StyleSheet.create({})