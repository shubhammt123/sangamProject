import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../components/Home'
import Signup from '../components/Signup'
import Login from '../components/Login'
import ProtectedParent from '../components/ProtectedParent'
import UnProtected from '../components/UnProtected'
import ProtectedRoutes from '../components/ProtectedRoutes'
import Profile from '../components/Profile'
import MyOrder from '../components/MyOrder'
import Order from '../components/Order'
import Admin from '../components/Admin'
import AdminUser from '../components/AdminUser'

const Router = createBrowserRouter([
    
    {
        element : <ProtectedParent />,
        children : [
            {
                path : "/",
                element : <Home />
            },
            {
                element : <UnProtected />,
                children : [
                   
                    {
                        path : "/login",
                        element : <Login />
                    },
                    {
                        path : "/signup",
                        element : <Signup />
                    }
                ]
            },
            {
                element : <ProtectedRoutes allowedRole = {["user","admin"]} />,
                children : [
                    {
                        path : "/profile",
                        element : <Profile />
                    }
                ]
            },
            {
                element : <ProtectedRoutes allowedRole={["user"]}/>,
                children : [
                    {
                        path : "/myorder",
                        element : <MyOrder />
                    },
                    {
                        path : "/order",
                        element  : <Order />
                    }
                ]
            },
            {
                element : <ProtectedRoutes allowedRole={["admin"]} />,
                children : [
                    {
                        path : "/admin",
                        element : <Admin />
                    },
                    {
                        path : "/adminuser",
                        element : <AdminUser />
                    }
                ]
            },
            
        ]
    }
    
])

export default Router