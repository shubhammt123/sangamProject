import React from 'react'
import Navbar from '../sharedComp/Navbar'
import Dashboard from '../sharedComp/Dashboard'
import { useOutletContext } from 'react-router-dom'

const Home = () => {
  const context = useOutletContext();
  return (
    <div>
        <Navbar context= {context} />
        {/* <Dashboard /> */}
    </div>
  )
}

export default Home