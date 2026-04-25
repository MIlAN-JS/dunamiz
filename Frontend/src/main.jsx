import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./app/App.jsx"
import { Router } from 'react-router'
import { RouterProvider } from 'react-router-dom'
import router from './app/app.routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
