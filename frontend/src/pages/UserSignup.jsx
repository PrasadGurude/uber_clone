import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const UserSignup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [userData, setUserData] = useState({})

  useEffect(() => {
    if (userData.email && userData.password && userData.firstname && userData.lastname) {
      console.log(userData)
    }
  }, [userData])


  const handleUserSubmit = async (e) => {
    e.preventDefault()
    setUserData({ firstname, lastname, email, password })
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
        <div className='  flex flex-col  pt-8 '>
          <img className=' w-20 ml-8 mb-5' src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Emblem.png" alt="" />
          <div className=' pb-7 py-3 px-4 '>
            <h2 className='text-2xl font-bold '>Get Started with Uber</h2>
            <div className='flex gap-4'>
              <input
                type="text"
                className='w-full bg-gray-100 py-3 px-2 rounded mt-3'
                placeholder='Firstname'
                required
                onChange={handleFirstnameChange}
              />
              <input
                type="text"
                className='w-full bg-gray-100 py-3 px-2 rounded mt-3'
                placeholder='Lastname'
                required
                onChange={handleLastnameChange}
              />
            </div>
            <input
              className='w-full bg-gray-100 py-3 px-2 rounded mt-5'
              type="email"
              placeholder='Email'
              required
              onChange={handleEmailChange}
              value={email} />
            <input
              className='w-full bg-gray-100 py-3 px-2 rounded mt-5'
              type="password"
              placeholder='Password'
              required
              onChange={handlePasswordChange}
              value={password} />
            <button className='w-full flex justify-center items-center bg-neutral-900 text-white py-3 rounded mt-5 hover:bg-neutral-950 mb-2'>Signup</button>
            <p> already have account  ? <Link to={'/login'} className='text-blue-600'>Login</Link></p>
          </div>
        </div>
      </form>
      <div className='py-3 px-4 pb-5'>
        <Link to={'/captain-signup'} className='w-full flex justify-center items-center bg-yellow-400 text-white py-3 rounded mt-5 hover:bg-neutral-950 mb-2' >
          Sign up as Captain</Link>
      </div>
    </div>
  )
}

export default UserSignup