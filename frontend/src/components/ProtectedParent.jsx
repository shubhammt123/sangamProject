import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

const ProtectedParent = () => {
  
    const [auth , setAuth] = useState(localStorage.getItem("token") ? true : false);
    useEffect(()=>{
      const token = localStorage.getItem("token");
      if(token){
        const decodedToken = jwtDecode(token);
      setRole(decodedToken.role)
      setUser(decodedToken);
      }
      
    },[])
    const [role ,  setRole] = useState(null);
    const [user , setUser] = useState(null);
  return (
    <div>
        <Outlet context={{auth , setAuth , role , setRole , user}} />
    </div>
  )
}

export default ProtectedParent