import React from 'react'
import { Outlet } from 'react-router-dom'
import CustomeHeader from './header'

const CustomerView = () => {
  return (
    <div className='flex flex-white overflow-hidden'>
        {/* header */}
        <CustomeHeader/>
        <main className='flex flex-col w-full'>
            <Outlet/>
        </main>
    </div>
  )
}

export default CustomerView