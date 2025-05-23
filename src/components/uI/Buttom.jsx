import React from 'react'

const Buttom = ({label, onClick, bg, text, hover_bg}) => {
  return (
  <button onClick={onClick} className={`font-Poppins-Medium ${bg} ${text} rounded-lg py-2 px-4 hover:${hover_bg} transition duration-300`}>{label}</button>
  )
}

export default Buttom