import React from 'react'
import { Outlet } from 'react-router'
const SetupLayout = () => {
  return (
    <main>
        <h1>this is setup</h1>
        <Outlet/>
    </main>
  )
}

export default SetupLayout