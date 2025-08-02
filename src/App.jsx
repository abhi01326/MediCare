
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './Components/Header'
import Doctors from './Components/Doctors'
import DoctorDetails from './Components/DoctorDetails'
import AppointmentForm from './Components/AppointmentForm'
import './App.css'

function App() {
  return (
    <Router>
        <Header />
      <Routes>
        <Route path='/' element={<Doctors />} />
        {/* Add more routes as needed */}
        <Route path='/doctors/:id' element={<DoctorDetails />} />
        <Route path='/appointments/:id' element={<AppointmentForm />} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  )
}

export default App
