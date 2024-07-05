import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../components/Home'

const Router = createBrowserRouter([
    {
        path : "/",
        element : <Home />
    },

])

export default Router