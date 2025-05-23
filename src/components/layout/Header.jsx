import React from 'react'
import TopHeader from './TopHeader'
import MainHeader from "./MainHeader"
import CategoriesHeader from './CategoriesHeader'

const Header = () => {
  return (
    <header className='w-full z-50 mx-auto'>
        <TopHeader/>
        <MainHeader/>
        <CategoriesHeader/>
    </header>
  )
}

export default Header