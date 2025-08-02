import { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import doctorsData from '../data/doctors.json'
import DoctorItem from './DoctorItem'



const Doctors = () => {
    const [doctors, setdoctors] = useState(doctorsData);

    // Assuming doctorsData is an array of doctor objects
    const [searchText, setSearchText] = useState('');

    // Filter doctors based on search text
    // This will filter doctors by name or specialization
    const filteredDoctors = doctors.filter(doctor => doctor.name.toLowerCase().includes(searchText.toLowerCase()) || doctor.specialization.toLowerCase().includes(searchText.toLowerCase()));
    const handleSearch = () => {
        // You can implement search logic here if needed
        // For now, it will just filter based on the searchText state
        const filtered = doctorsData.filter(doctor => doctor.name.toLowerCase().includes(searchText.toLowerCase()) || doctor.specialization.toLowerCase().includes(searchText.toLowerCase()));
        setdoctors(filtered);
    }
  return (
    <div className='flex flex-col  gap-1 px-3 min-h-screen '>
        <div className='flex justify-between items-center p-3'>
            <h1 className='text-2xl font-bold'>Doctors</h1>
            <div className='flex gap-2'>
                <input type="search" placeholder="Search doctors or specialization..." className='p-2 rounded-lg min-w-xl bg-gray-100' onChange={(e) => {setSearchText(e.target.value); setdoctors(doctorsData);}} />
            <button className='p-2 bg-blue-600 rounded-lg text-white' onClick={handleSearch}><FaSearch size={20} /></button>
            </div>
        </div>
        {/* Add more content or components as needed */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>{filteredDoctors.map(doctor => (
        <Link to={`/doctors/${doctor.id}`} key={doctor.id}>
            <DoctorItem doctor={doctor} />
        </Link>
        ))}
        </div>
    </div>
  )
}

export default Doctors
