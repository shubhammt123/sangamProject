import React, { useState } from 'react';
import Vector from "../assets/4957136.jpg";
import axios from 'axios';
import { useNavigate, useOutletContext } from 'react-router-dom';

const Login = () => {
    const [formData ,setFormData] = useState({});
    const navigate = useNavigate();
    const context = useOutletContext();

    console.log(context);

    const handleChange = (e)=>{
        setFormData({...formData , [e.target.name] : e.target.value});
    }
    const  handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/users/login",formData);
            context.setAuth(true);
            context.setRole(response.data.data.role)
            navigate("/profile")
            console.log(response)
        } catch (error) {
            console.log(error);            
        }
    }
  return (
    <div className='h-screen flex justify-center items-center'>
        <div className='bg-white w-4/5 flex shadow-2xl rounded-xl'>
            <div className='w-1/2'>
                <img src={Vector} alt="" className='w-full rounded-s-xl' />
            </div>
            <div className='w-1/2 flex justify-center'>
            <div className='w-full  items-center flex flex-col justify-center'>
            <h1 className='text-center text-2xl font-semibold'>Welcome Back!, Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className='my-5  w-full'>
                        <div>
                            <label htmlFor="">Email</label>
                            <input type="email" name='email' placeholder='Email' className='block p-2 my-2 outline-none border rounded' onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="">Password</label>
                            <input type="password" name='password' placeholder='Password' className='block p-2 outline-none border rounded' onChange={handleChange} />
                        </div>
                        <div className='w-full'>
                            <button type='submit' className='p-2 bg-blue-600 w-full active:bg-blue-800 rounded text-white py-1 my-4'>Login</button>
                        </div>
                    </div>
                </form>
            </div>
                
            </div>
        </div>
    </div>
  )
}

export default Login