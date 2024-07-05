import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-white flex justify-between items-center p-2'>
        <div >
            <p className='text-3xl font-bold'>Logo</p>
        </div>
        <div>
            <input type="text" placeholder='Search here...' className='outline-none py-1 px-2 border'/>
        </div>
        <div>
            Login/Signup
        </div>
    </div>
  )
}

export default Navbar