import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchProducts())
    },[dispatch]);

    const { products } = useSelector((state)=>state.product);
    console.log(products);
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})