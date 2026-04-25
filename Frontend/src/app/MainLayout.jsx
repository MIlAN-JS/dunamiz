import React from 'react'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <main>
      
    // navbar
    <h1>this is navbar</h1>
    <Outlet/>
    </main>
  )
}

export default MainLayout
