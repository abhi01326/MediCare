import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between items-center p-4 bg-white text-black shadow-lg'>
      <Link to="/" className='text-2xl font-bold'>HealthCare </Link>
    </div>
  )
}

export default Header
