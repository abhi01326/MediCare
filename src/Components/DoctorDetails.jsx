import { useState, useEffect } from 'react';
import doctorsData from '../data/doctors.json';
import { FaHospitalUser } from "react-icons/fa";
import Appointment from './Appointment';

const DoctorDetails = () => {
    const [doctor, setDoctor] = useState('');
    useEffect(() => {
        const doctorId = window.location.pathname.split('/').pop();
        const selectedDoctor = doctorsData.find(doctor => doctor.id === parseInt(doctorId));
        setDoctor(selectedDoctor);
    }, [])
    const appointments = doctor["appointments"];
    const isDisabled = doctor.availability === 'On Leave' || doctor.availability === 'Fully Booked';
    const buttonStyle = isDisabled ? 'bg-gray-500 text-gray-300' : 'bg-blue-600 text-white';
    const textStyle = isDisabled ? 'text-red-500' : 'text-green-500';
    let appointmentsOfDoctor = [];
    if(doctor.availability === 'Fully Booked') {
        let hour = 9; // Starting from 9 AM
        for(let i = 0; i < 8; i++) {
            if(hour<10){
                hour = `0${hour}`;
            }
            appointmentsOfDoctor.push({time: `2025-08-01 ${hour}:00`, isBooked: true});
            hour++;
        }
    }
    return (
        <div>
            {doctor ? (
                <div className='min-h-screen  flex flex-col p-10 bg-gray-100'>
                    <div className="flex items-center lg:flex-row flex-col mb-4 gap-5">
                        <img src={doctor.profileImage} alt={doctor.name} className='w-75 h-80 rounded' />
                        <div className='flex flex-col items-stretch'>
                            <h2 className='text-3xl font-semibold'>{doctor.name}</h2>
                            <p className='text-sm text-gray-400'>{doctor.specialization}</p>
                            <div className="flex items-center">
                                <FaHospitalUser className='text-blue-500 mr-2' />
                                <p className='text-md'>{doctor.workplace}</p>
                            </div>
                            <p className='text-lg py-5'>{doctor.description}</p>
                            <p className='text-lg font-semibold'>Availability: <span className={`${textStyle} text-sm`}>{doctor.availability}</span></p>
                        </div>
                    </div>
                     <div className="flex ">
                        {appointments && appointments.length > 0 &&(
                            <div className='flex flex-col min-w-full gap-2'>
                                <h3 className='text-2xl font-semibold'>Appointments</h3>
                                <div className="flex flex-wrap justify-evenly min-w-full p-2 gap-2">
                                    {appointments.map((appointment, index) => (
                                    <Appointment key={index} appointment={appointment} />
                                ))}
                                </div>
                            </div>
                        )}
                        {appointmentsOfDoctor && appointmentsOfDoctor.length > 0 && (
                            <div className='flex flex-col min-w-full gap-2'>
                                <h3 className='text-2xl font-semibold'>Available Slots</h3>
                                <div className="flex flex-wrap justify-evenly min-w-full p-2 gap-2">
                                    {appointmentsOfDoctor.map((appointment, index) => (
                                        <Appointment key={index} appointment={appointment} />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <div>
                            <button className={`mt-5 p-2 ${buttonStyle} rounded-lg text-white`} disabled={isDisabled} onClick={() => {window.location.href = `/appointments/${doctor.id}`}}>
                        Book Appointment
                    </button>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default DoctorDetails
