import { useState } from 'react'
import Home from './Components/Pages/Home'
import { Route, Routes } from "react-router-dom";
import SignUp from './Components/Authpages/SignUp';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/SignUp' element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
