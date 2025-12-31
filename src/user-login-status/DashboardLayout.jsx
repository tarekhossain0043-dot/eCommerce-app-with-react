import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

export default function DashboardLayout() {
  return (
    <div>
    <Header />
    <div className='flex'>
        <Sidebar /> 
        <main className='flex py-6.5 flex-1'>
            <Outlet /> 
            {/* i think ekhane Dashboard er page gula show korbe default hisabe home page */}
        </main>
    </div>
    </div>
  )
}
