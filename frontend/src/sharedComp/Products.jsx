import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../redux/slices/cartSlice';
import { productData , setStatus , setError } from '../redux/slices/productSlice';

const Products = () => {
    const [data,setData] = useState([]);
    const [cart , setCart] = useState([]);

    const dispatch = useDispatch();
    const { products , status } = useSelector((state)=>state.product);
    const fecthData = async ()=>{
        dispatch(setStatus("loading"))
        try {
            const response = await axios.get("https://fakestoreapi.com/products");

            // console.log(response)
            
            dispatch(productData(response.data));
            dispatch(setStatus("idle"))
        } catch (error) {
            dispatch(setError(error));
            dispatch(setStatus("error"))
            
        }
    }

    console.log(cart);
    useEffect(()=>{
        fecthData();
    },[])

    const handleClick = (data)=>{
        dispatch(add(data));
    }

    if(status === "loading"){
        return (
            <div className='text-3xl font-bold'>Loading...</div>
        )
    }
  return (
    <div>
        <div className='grid grid-cols-3 gap-5 p-5'>
            {products.map((item)=>(
                <div key={item.id} className='bg-white shadow rounded p-4 flex flex-col items-center'>
                    <img src={item.image} alt="" className='w-[200px] h-[200px]' />
                    <h4>{item.title}</h4>
                    <p>{item.price}</p>
                    <button onClick={()=>{handleClick(item)}} className='p-2 bg-orange-500 text-white rounded shadow'>Add to cart</button>
                </div>           
                 ))}
        </div>
    </div>
  )
}

export default Products