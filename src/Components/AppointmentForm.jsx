import { useState, useEffect } from 'react'
import doctorsData from '../data/doctors.json'; // Assuming you have a data file with doctor information
import { replace, useNavigate } from 'react-router-dom';

const AppointmentForm = () => {

    const [doctor, setDoctor] = useState(null);
    const navigate = useNavigate();
    const [formSubmitted, setFormSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        patientName: '',
        patientEmail: '',
        appointmentTime: ''
    });



    useEffect(() => {
        const doctorId = window.location.pathname.split('/').pop();
        const selectedDoctor = doctorsData.find(doctor => doctor.id === parseInt(doctorId));
        setDoctor(selectedDoctor);
    }, []);


    const handleChange = (e) => {
        const { value } = e.target;
        setFormData({ ...formData, patientName: value });
    }
    const handleSelectChange = (e) => {
        const { value } = e.target;
        setFormData({ ...formData, appointmentTime: value });
    }
    const handleEmailChange = (e) => {
        const { value } = e.target;
        setFormData({ ...formData, patientEmail: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        setFormSubmitted(true);
    }



    if (!doctor) {
        return <p>Loading...</p>;
    }
    const appointments = doctor["appointments"];
    return (
        <div className='min-h-screen  p-10 '>
            {
                formSubmitted ? (
                    <div className='flex flex-col items-center justify-center min-h-screen p-10'>
                        <img src='https://media.istockphoto.com/id/949393734/vector/document-submission-icon.jpg?s=612x612&w=0&k=20&c=ICE9LtOsjk2xcPY9iI7StHols2ax81H8wGBgn9wqmlk=' alt={doctor.name} className='w-75 h-80 rounded mb-5' />
                        <h2 className='text-3xl font-semibold'>Appointment Booked Successfully!</h2>
                        <p>Thank you for booking an appointment with {doctor.name}.</p>
                        <button className='mt-5 p-2 bg-blue-600 rounded-lg text-white' onClick={() => navigate('/', replace)}>
                            Book Another Appointment
                        </button>
                    </div>
                ) : (
                    <>
                        <h1 className='text-2xl font-bold'>Book Appointment with {doctor.name}</h1>
                        <form className='flex flex-col gap-4 p-4' onSubmit={handleSubmit}>
                            <label className="text-lg">Paitent Name</label>
                            <input type="text" placeholder="Enter your name" className='p-2 rounded-lg min-w-xl bg-gray-100' onChange={handleChange} value={formData.patientName} required />
                            <label className="text-lg">Paitent Email</label>
                            <input type="email" placeholder="Enter your email" value={formData.patientEmail} className='p-2 rounded-lg min-w-xl bg-gray-100' onChange={handleEmailChange} required />
                            <label>Select Time:</label>
                            <select className='p-2 rounded-lg min-w-xl bg-gray-100' onChange={handleSelectChange} value={formData.appointmentTime} required>
                                <option value="">Select Time</option>
                                {appointments && appointments.map((appointment, index) => (
                                    <option key={index} value={appointment.time} disabled={appointment.isBooked}>{appointment.time}</option>
                                ))}
                            </select>
                            <button type="submit" className='p-2 bg-blue-600 rounded-lg text-white' >Book Appointment</button>
                        </form>
                    </>
                )
            }
        </div>
    )
}

export default AppointmentForm
