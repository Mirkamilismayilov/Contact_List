import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Main from './Main'

const MainLayout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Main/>
    </div>
  )
}

export default MainLayout
