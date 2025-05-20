import React from 'react'
import { Link } from 'react-router-dom'

const PrimaryHeading = ({path, title, label, }) => {
  return (
<div className='flex justify-between items-center py-2 border-b-2 border-primary-200'>
        <h1 className='font-Poppins-SemiBold text-primary-700 text-2xl'>{title}</h1>
        <Link to={path} className='font-Poppins-Medium text-primary-500 text-sm bg-primary-100 rounded-lg py-2 px-4 hover:bg-primary-200 transition duration-300'>{label}</Link >
</div>
  )
}

export default PrimaryHeading