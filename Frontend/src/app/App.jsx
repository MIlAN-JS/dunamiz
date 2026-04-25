import React, { useEffect } from 'react'
import LoginPage from "../features/auth/ui/pages/LoginPage.jsx"
import { Outlet } from 'react-router-dom'
import useAuth from "../features/auth/hook/useAuth.js"
import { useSelector } from 'react-redux'

  const App = () => {

    const {handleGetUser} = useAuth()
    const state = useSelector(state => state.auth)

    console.log(state)

    useEffect(()=>{
        handleGetUser()
    }, [])


    return (
      <main>

        {/* //navbar */}
      i am app lol wtf


        {/* //childrens */}

        <Outlet/>
  


        
      </main>
    )
  }

export default App
