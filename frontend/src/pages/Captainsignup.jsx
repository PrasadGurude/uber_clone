import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Captainsignup = () =>  {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [userData, setUserData] = useState({})

  useEffect(() => {
    if (userData.email && userData.password && userData.fullname.firstname && userData.fullname.lastname) {
      console.log("useeff",userData)
    }
    console.log("hi")
  }, [userData])


  const handleUserSubmit = async (e) => {
    e.preventDefault()
    setUserData({
      fullname: {
        firstname,
        lastname
      },
      email,
      password
    })
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
        <img className=' w-20 ml-8 ' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
        <div className=' pb-7 py-3 px-4 '>
            <h3 className='pt-3 text-xl font-bold'>What's your name</h3>
            <div className='flex gap-4'>
              <input
                type="text"
                className='w-full bg-gray-100 py-3 px-2 rounded mb-5'
                placeholder='Firstname'
                value={firstname}
                required
                onChange={handleFirstnameChange}
              />
              <input
                type="text"
                className='w-full bg-gray-100 py-3 px-2 rounded mb-5'
                placeholder='Lastname'
                value={lastname}
                required
                onChange={handleLastnameChange}
              />
            </div>
            <h3 className='pb-1 text-xl font-bold'>Enter your email </h3>
            <input
              className='w-full bg-gray-100 py-3 px-2 rounded mb-5'
              type="email"
              placeholder='Email'
              required
              onChange={handleEmailChange}
              value={email} />
            <h3 className='pb-1 text-xl font-bold'>Enter password </h3>
            <input
              className='w-full bg-gray-100 py-3 px-2 rounded mb-5'
              type="password"
              placeholder='Password'
              required
              onChange={handlePasswordChange}
              value={password} />
            <button className='w-full flex justify-center items-center bg-yellow-400 text-white py-3 rounded-lg mt-5 hover:bg-neutral-950 mb-2'>Signup as Captain</button>
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