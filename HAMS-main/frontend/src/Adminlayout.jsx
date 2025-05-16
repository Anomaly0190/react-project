import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidepanel from './pages/admin/Sidepanel.jsx'
const Adminlayout = () => {
  return (
    <>
    <div className="flex">
    <Sidepanel/>
    <Outlet />
    </div>
   
    </>
  )
}

export default Adminlayout
