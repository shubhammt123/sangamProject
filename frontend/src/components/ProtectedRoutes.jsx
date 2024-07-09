import React, { useEffect } from 'react'
import { Outlet, useNavigate, useOutletContext } from 'react-router-dom'
import Navbar from '../sharedComp/Navbar';

const ProtectedRoutes = ({allowedRole}) => {
    const context = useOutletContext();
    const navigate = useNavigate();
    console.log(context);

    useEffect(()=>{
        if(!context.auth){
            return navigate("/login")
        }

        if(!allowedRole.includes(context.role)){
            return  navigate("/");
        }
    },[])
  return (
    <div>
      <Navbar context={context} />
      <Outlet /></div>
  )
}

export default ProtectedRoutes