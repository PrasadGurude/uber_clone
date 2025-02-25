import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'

const Captainsignup = () => {

  const { captain, setCaptain } = useContext(CaptainDataContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [vehicleColor, setVehicleColor] = useState('')
  const [vehicleType, setVehicleType] = useState('')
  const [vehiclePlate, setVehiclePlate] = useState('')
  const [vehicleCapacity, setVehicleCapacity] = useState('')

  const handleUserSubmit = async (e) => {
    e.preventDefault()
    const captainData = { email, password, firstname, lastname }
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/captains/signup`, captainData)

    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token', data.token);
      navigate('/home')
    }
    setEmail('');
    setPassword('');
    setFirstname('');
    setLastname('');
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleFirstnameChange = (e) => {
    setFirstname(e.target.value)
  }

  const handleLastnameChange = (e) => {
    setLastname(e.target.value)
  }

  return (
    <div className='h-screen flex justify-between flex-col bg-[#eeeeee]'>
      <form onSubmit={handleUserSubmit}>
        <div className='  flex flex-col  pt-1 '>
          <img className=' w-15 ml-8  ' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
          <div className=' px-4  '>
            <h3 className=' text-xl font-bold'>What's your name</h3>
            <div className='flex gap-4'>
              <input
                type="text"
                className='w-full bg-gray-100 py-2 px-2 rounded mb-3'
                placeholder='Firstname'
                value={firstname}
                required
                onChange={handleFirstnameChange}
              />
              <input
                type="text"
                className='w-full bg-gray-100 py-2 px-2 rounded mb-3'
                placeholder='Lastname'
                value={lastname}
                required
                onChange={handleLastnameChange}
              />
            </div>
            <h3 className='pb-1 text-xl font-bold'>Enter your email </h3>
            <input
              className='w-full bg-gray-100 py-2 px-2 rounded mb-3'
              type="email"
              placeholder='Email'
              required
              onChange={handleEmailChange}
              value={email} />
            <h3 className='pb-1 text-xl font-bold'>Enter password </h3>
            <input
              className='w-full bg-gray-100 py-2 px-2 rounded mb-3'
              type="password"
              placeholder='Password'
              required
              onChange={handlePasswordChange}
              value={password} />
            <div>
              <h3 className='pb-1 text-xl font-bold'>Vehicle Details</h3>
              <div className='flex gap-4'>
                <input
                  type="text"
                  className='w-full bg-gray-100 py-2 px-2 rounded mb-4'
                  placeholder='Vehicle Color'
                  value={vehicleColor}
                  required
                  onChange={(e) => setVehicleColor(e.target.value)}
                />
                <input
                  type="text"
                  className='w-full bg-gray-100 py-2 px-2 rounded mb-4'
                  placeholder='Vehicle Plate'
                  value={vehiclePlate}
                  required
                  onChange={(e) => setVehiclePlate(e.target.value)}
                />
              </div>
              <div className='flex gap-4'>
                <input
                  type="number"
                  className='w-full bg-gray-100 py-2 px-2 rounded mb-4'
                  placeholder='Vehicle Capacity'
                  value={vehicleCapacity}
                  min={1}
                  required
                  onChange={(e) => setVehicleCapacity(e.target.value)}
                />
                <input
                  type="text"
                  className='w-full bg-gray-100 py-2 px-2 rounded mb-4'
                  placeholder='Vehicle Type'
                  value={vehicleType}
                  required
                  onChange={(e) => setVehicleType(e.target.value)}
                />
              </div>
            </div>
            <button className='w-full flex justify-center items-center bg-yellow-400 text-white py-3 rounded-lg  hover:bg-neutral-950 mb-2'>Signup as Captain</button>
            <p> already have account  ? <Link to={'/captain-login'} className='text-blue-600'>Login</Link></p>
          </div>

        </div>
      </form>
      <div className='py-3 px-4 pb-5'>
        <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
          Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>
    </div>
  )
}
export default Captainsignup