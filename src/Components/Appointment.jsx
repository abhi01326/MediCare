import React from 'react'

const Appointment = ({ appointment }) => {
    const hour = appointment.time.split(' ')[1]
    const isAM = parseInt(hour.split(":")[0])>11 ? 'PM' : 'AM';
    return (
        <>
            <div className='flex flex-col min-w-50 justify-around bg-white rounded text-black p-3 gap-3 shadow-lg'>
                <p className='text-lg'>Time: {hour} {isAM}</p>
                <p className='text-lg'>Status: {appointment.isBooked ? 'Booked' : 'Available'}</p>
                <div className={`min-h-0.5 w-full ${appointment.isBooked ? 'bg-red-500' : 'bg-green-500'} rounded-lg`}></div>
            </div>
        </>
    )
}

export default Appointment
