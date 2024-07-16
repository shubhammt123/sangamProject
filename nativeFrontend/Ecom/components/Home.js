import { Button, Dimensions, FlatList, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice';
import { add } from '../redux/slices/cartSlice';

const Home = ({navigation}) => {
    const dispatch = useDispatch();
    const { width , height } = Dimensions.get("window");

    const cartWidth = width * 0.45

    useEffect(()=>{
        dispatch(fetchProducts())
    },[dispatch]);

    const { products } = useSelector((state)=>state.product);

    const handleCart = (data)=>{
        dispatch(add(data));
    }
    
  return (
    <View style={{alignItems : "center"}}>
      <FlatList data={products} renderItem={(item)=>{
        
        return (
            <Pressable onPress={()=>{navigation.navigate("Product", {product : item.item})}}>
            <View key={item.item.id} style={{margin : 10 , alignItems : "center" , width : cartWidth , backgroundColor : "white" , padding : 15 , elevation : 10}}>
                <Image source={{uri : item.item.image}} style={{width : 200 , height : 200}} />
                <Text>{item.item.title}</Text>
                <Text>{item.item.price}</Text>
                <TouchableOpacity style={{backgroundColor : "white" , borderWidth : 1 , borderColor : "black"  , borderStyle : "solid", paddingHorizontal : 15 , paddingVertical : 10 , marginVertical : 10}} onPress={()=>{handleCart(item.item)}}>
                    <Text >Add to cart</Text>
                </TouchableOpacity>
            </View>
            </Pressable>
        )
      }}
      numColumns="2"
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})