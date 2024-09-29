import React from 'react'
import Navbar from './component/Navbar'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default App