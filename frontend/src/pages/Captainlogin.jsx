import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Captainlogin = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [captainData, setCaptainData] = useState({})

  useEffect(() => {
    if(captainData.email && captainData.password){
      console.log(captainData)
    }
  }, [captainData])
  

  const handleUserSubmit =async (e) => {
    e.preventDefault()
    setCaptainData({email, password})
    setEmail('');
    setPassword('');
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  return (
    <div className='h-screen flex justify-between flex-col bg-[#eeeeee]'>
      <form onSubmit={handleUserSubmit}>
        <div className='  flex flex-col  pt-8 '>
          <img className=' w-30 ml-8 mb-5' src="https://cdn.branch.io/branch-assets/1585958759848-og_image.png" alt="" />
          <div className=' pb-7 py-3 px-4 '>
            <h2 className='text-2xl font-bold '>Get Started with Uber</h2>
            <input
              className='w-full bg-gray-100 py-3 px-2 rounded mt-5'
              type="text"
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
              value={password}/>
            <button className='w-full flex justify-center items-center bg-yellow-400 text-white py-3 rounded-lg mt-5 hover:bg-neutral-950 mb-2'>Login</button>
            <p>Join the fleet by <Link to={'/captain-signup'} className='text-blue-600'>create New Account as Captain</Link></p>
          </div>
        </div>
      </form>
      <div className='py-3 px-4 pb-5'>
        <Link to={'/login'} className='w-full flex justify-center items-center bg-neutral-900 text-white py-3 rounded-lg mt-5 hover:bg-neutral-950 mb-2' >
          Sign in as User </Link>
      </div>
    </div>
  )
}

export default Captainlogin