import React, { useEffect } from 'react'
import { Outlet, useNavigate, useOutletContext } from 'react-router-dom'

const UnProtected = () => {
    const context = useOutletContext();
    const navigate = useNavigate();
    console.log(context);

    useEffect(()=>{
        if(context.auth){
            return navigate("/")
        }
    },[])

    
  return (
    <div>
        <Outlet context={context} />
    </div>
  )
}

export default UnProtected