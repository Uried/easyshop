import React from 'react'
import { Link } from 'react-router-dom'

export const Accueille = () => {
  return (
    <div className='bg-gradient-to-r from-slate-300 via-slate-300 to-zinc-400 h-screen'>
    <div className=' left-[28%] md:left-[40%] absolute top-[20%] bg-orange-500 rounded-full text-white p-2 animate-spin-slow'>
      <span className='text-[100px] md:text-[200px] animate__animated animate__bounceIn'>
        P2P
      </span>
    </div>
    <Link to="/login" className='absolute w-[25%] left-[40%] md:left-[45%] top-[50%] md:top-[60%] px-2 py-3 font-bold  bg-red-500 block text-white text-center rounded-md shadow-md shadow-gray-500'>ENTER</Link>
  </div>
  )
}
