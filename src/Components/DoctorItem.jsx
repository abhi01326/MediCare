import React from 'react'

const DotorItem = ({doctor}) => {
    const availabilityStyle = doctor.availability === 'Available Today' ? 'text-green-500' : 'text-red-500';
  return (
    <div  className='flex flex-col min-h-110 justify-around items-center gap-2 p-4 rounded-lg shadow-lg hover:translate-y-0.5 hover:scale-105 transition duration-300 text-center'>
            <img src={doctor.profileImage} alt={doctor.name} className='w-50 h-50 rounded-full' />
            <h2 className='text-2xl font-semibold'>{doctor.name}</h2>
            <p className='text-sm'>{doctor.specialization} at {doctor.workplace}</p>
            <p className={availabilityStyle}>{doctor.availability}</p>
        </div>
  )
}

export default DotorItem
