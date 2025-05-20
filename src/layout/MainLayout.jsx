import React from 'react'
import Header from '../components/layout/Header'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
    <Header/>
      <main className="w-full mx-auto">
        <div className="max-w-screen-xl mx-auto">
            <Outlet/>
        </div>
      </main>
    </>
  )
}

export default MainLayout