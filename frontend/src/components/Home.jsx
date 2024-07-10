import React from 'react'
import Navbar from '../sharedComp/Navbar'
import Dashboard from '../sharedComp/Dashboard'
import { useOutletContext } from 'react-router-dom'
import Products from '../sharedComp/Products'

const Home = () => {
  const context = useOutletContext();
  return (
    <div>
        <Navbar context= {context} />
        {/* <Dashboard /> */}
        <Products />
    </div>
  )
}

export default Home