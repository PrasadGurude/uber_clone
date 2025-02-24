import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='bg-cover bg-bottom bg-[url(https://th.bing.com/th/id/R.bc9a4c94f751975ceee4c42819d96973?rik=WxdXu5GuIzLWYg&riu=http%3a%2f%2fstatic3.depositphotos.com%2f1005809%2f202%2fi%2f450%2fdepositphotos_2028606-Yellow-traffic-signal-light.jpg&ehk=hB9hdibzCtddXxKmEXqt%2beMhweUBHEGt3p72zqsAyjQ%3d&risl=&pid=ImgRaw&r=0)] h-screen flex justify-between flex-col bg-red-400 pt-8 '>
        <img className=' w-20 ml-8' src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Emblem.png" alt="" />
        <div className='bg-white pb-7 py-3 px-4 '>
          <h2 className='text-2xl font-bold '>Get Started with Uber</h2>
          <Link to={'/login'} className='w-full flex justify-center items-center bg-black text-white py-3 rounded mt-5'>continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home