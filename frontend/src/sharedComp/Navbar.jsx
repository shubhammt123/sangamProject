import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='bg-white flex justify-between items-center p-2 py-4'>
        <div >
            <p className='text-3xl font-bold'>Logo</p>
        </div>
        <div className='flex items-center bg-slate-50 rounded shadow'>
            <input type="text" placeholder='Search here...' className='outline-none bg-transparent  py-1 px-2 text-sm w-[25vw]'/>
            <div className='h-full p-2  px-3 bg-slate-300 rounded-e'>
            <IoMdSearch className='text-2xl' />
            </div>
            
        </div>
        <div>
          <Link to="/login">
          Login/Signup
          </Link>
            
        </div>
    </div>
  )
}

export default Navbar