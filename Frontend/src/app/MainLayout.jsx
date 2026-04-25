import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <main>
      
    
     <Navbar/>
    <Outlet/>
    </main>
  )
}

export default MainLayout
