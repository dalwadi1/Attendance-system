import { useState } from 'react'
import Home from './Components/Pages/Home'
import { Route, Routes } from "react-router-dom";
import SignUp from './Components/Authpages/SignUp';
import SignIn from './Components/Authpages/SignIn';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Routes>
    </>
  )
}

export default App
