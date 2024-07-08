import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

const ProtectedParent = () => {
    const [auth , setAuth] = useState(false);
    const [role ,  setRole] = useState("");
    console.log(auth)
  return (
    <div>
        <Outlet context={{auth , setAuth , role , setRole}} />
    </div>
  )
}

export default ProtectedParent