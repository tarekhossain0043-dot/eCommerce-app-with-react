import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import ProtectedRoute from './user-login-status/ProtectedRoute'
import DashboardLayout from './user-login-status/DashboardLayout'
import DashboardHome from './dashboard-inner-component/DashboardHome'

export default function App() {
  return (
    <>
    <Routes>
      {/* default user can show this login page */}
      <Route path='/login' element = {<Login />} />
      {/* protected routes for user login or not */}
      <Route element = {<ProtectedRoute />}>
        <Route element = {<DashboardLayout />}>
          <Route path='/' element = {<DashboardHome />} />
        </Route>
      </Route>

    </Routes>
    </>
  )
}
