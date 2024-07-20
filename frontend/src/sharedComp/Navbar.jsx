import React, { useEffect } from 'react'
import { IoMdSearch } from "react-icons/io";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useDispatch, useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { logout, setAuth } from '../redux/slices/authSlice';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));




const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  



  const {  cartItems } = useSelector((state)=>state.cart);
  const { auth  , role} =   useSelector((state)=>state.auth);

  const handleLogOut = ()=>{
    localStorage.clear();
    dispatch(logout());
  }

  useEffect(()=>{
    if(!auth){
      navigate("/login");
    }
  },[auth])
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
        <div className='flex gap-4 items-center'>
          {/* <div>My Cart : {cartItems.length}</div> */}
          <div><IconButton aria-label="cart" onClick={()=>{navigate("/cart")}}>
      <StyledBadge badgeContent={cartItems.length} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton></div>
          {auth ? (
            role === "user" ? 
            <div className='flex items-center gap-2'>
               <Link to="/myorder">My Order</Link>
               <div onClick={handleLogOut}  className='cursor-pointer'>Log out</div>
            </div>
           

             : <div className='flex items-center gap-3'><Link to="/adminuser">User</Link>
             <Link to="/adminproduct">Product</Link>
             <Link to="/adminorder">Order</Link>
             <div onClick={handleLogOut} className='cursor-pointer'>Log out</div>
             </div>
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