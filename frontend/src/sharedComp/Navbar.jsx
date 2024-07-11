import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { Link, Navigate } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));


const Navbar = ({context}) => {
  const handleLogOut = ()=>{
    localStorage.clear();
    // context.setAuth(false);
  }

  const {  cartItems } = useSelector((state)=>state.cart)

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
        <div className='flex gap-4'>
          <div>My Cart : {cartItems.length}</div>
          <div><IconButton aria-label="cart">
      <StyledBadge badgeContent={cartItems.length} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton></div>
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