import React from 'react'
import TopHeader from './TopHeader'
import MainHeader from "./MainHeader"

const Header = () => {
  return (
    <header className='w-full mx-auto'>
        <TopHeader/>
        <MainHeader/>
    </header>
  )
}

export default Header