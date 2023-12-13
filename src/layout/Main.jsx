import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div>
    <Navbar />
    <div className="min-h-screen">
    <Outlet />
    </div>
    <Footer />
  </div>
  )
}

export default Main
