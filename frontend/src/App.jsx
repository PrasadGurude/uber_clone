import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import Captainlogin from './pages/Captainlogin'
import Captainsignup from './pages/Captainsignup'
import Start from './pages/Start'
import Home from './pages/Home'
import UserProtectWrapper from './pages/UserProtectWrapper'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/home" element={<UserProtectWrapper><Home /></UserProtectWrapper>} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<Captainlogin />} />
        <Route path="/captain-signup" element={<Captainsignup />} />
      </Routes>
    </div>
  )
}

export default App