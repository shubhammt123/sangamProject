import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { Link, Navigate } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Navbar = ({context}) => {
  const handleLogOut = ()=>{
    localStorage.clear();
    // context.setAuth(false);
  }
  console.log(context)
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
          {context?.auth ? (
            context.role === "user" ? 
            <div>
      {/* <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          // value={age}
          label="Age"
          // onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>With label + helper text</FormHelperText>
      </FormControl> */}
      <FormControl sx={{   border: "none" , outline : "none" }}>
        {context.role === "user" ?  (<Select
          // value={age}
          // onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>My Order</MenuItem>
          <MenuItem value={20}>Profile</MenuItem>
          <MenuItem value={30} onClick={handleLogOut}>Logout</MenuItem>
        </Select>) : (
          <Select
          // value={age}
          // onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Admin</MenuItem>
          <MenuItem value={20}>Profile</MenuItem>
          <MenuItem value={30} onClick={handleLogOut}>Logout</MenuItem>
        </Select>
        )}
        
        {/* <FormHelperText>Without label</FormHelperText> */}
      </FormControl>
    </div>

             : <div><Link to="/adminuser">User</Link></div>
          ) :<Link to="/login">
          Login/Signup
          </Link> }
          <div>
            {/* {context.user.name} */}
          </div>
            
        </div>

    </div>
  )
}

export default Navbar