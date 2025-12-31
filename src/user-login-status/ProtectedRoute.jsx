import React from 'react'
import Login from '../components/Login'

export default function ProtectedRoute() {
  return (
    <div>
        <Login />
    </div>
    // ekhane check kora hobe user jodi login kore ba thake tale dashboardLayout page ar na thakle login page show korbo
  )
}
