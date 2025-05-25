import React  from 'react'
import Headers from '../UI/Headers'
import Footer from '../UI/Footer.jsx'
import { Outlet } from 'react-router-dom'


export default function AppLayout() {
  return (
    <div>
        <Headers/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
