import React  from 'react'
import Headers from '../UI/Headers'
import Footers from '../UI/Footers'
import { Outlet } from 'react-router-dom'
 

export default function AppLayout() {
  return (
    <div>
        <Headers/>
        <Outlet/>
        <Footers/>
    </div>
  )
}
