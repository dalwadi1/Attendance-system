import { useState } from 'react'
import Home from './Components/Pages/Home'
import { Route, Routes } from "react-router-dom";
import SignUp from './Components/Authpages/SignUp';
import SignIn from './Components/Authpages/SignIn';
import UserDashbors from './Components/Pages/UserDashbors';
import Attendance from './Components/Pages/Attendance';
import Leave from './Components/Pages/Leave';
import Calendar from './Components/Pages/Calender';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />


        <Route path='/user-desh' element={<UserDashbors />} />
        <Route path='/attendance' element={<Attendance />} />
        <Route path='/leave' element={<Leave />} />
        <Route path='/calender' element={<Calendar />} />
      </Routes>
    </>
  )
}

export default App
