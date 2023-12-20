import React from 'react'
import { Outlet } from 'react-router-dom'
import Table from '../Components/Table'
const Homelayout = () => {
  return (
    <div>
        <Table/>
        <Outlet/>
    </div>
  )
}

export default Homelayout;