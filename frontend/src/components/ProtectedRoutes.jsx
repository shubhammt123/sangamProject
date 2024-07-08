import React, { useEffect } from 'react'
import { Outlet, useNavigate, useOutletContext } from 'react-router-dom'

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
    <div><Outlet /></div>
  )
}

export default ProtectedRoutes