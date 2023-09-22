import React from 'react';
import { Navbar } from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Register from './components/register/Register';
import { PatientDashboard } from './components/dashboard/PatientDashboard';
import { DoctorDashboard } from './components/dashboard/DoctorDashboard';
import { Appointment } from './components/dashboard/Appointment';
import AddAppointment from './components/appointment/AddAppointment';
import Token from './components/token/Token';
import { TokenDisplay } from './components/token/TokenDisplay';

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/patientdashboard' element={<PatientDashboard />} />
        <Route path='/doctordashboard' element={<DoctorDashboard />} />
        <Route path='/addappointment' element={<AddAppointment />} />
        <Route path='/appointment' element={<Appointment />} />
        <Route path='/token' element={<Token/>}/>
        <Route path='/token-display/:tokenNumber' element={<TokenDisplay/>}/>
      </Routes>

    </div>
  );
}

export default App;
