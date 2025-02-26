import React, { useState } from 'react'

const Home = () => {

  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <div className='h-screen relative'>
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="uber_logo" />
      <div>
        <img className='h-full ' src="https://uploads.disquscdn.com/images/abf0ee2a43831d4bafc38d5d4e8671317af55edb03da2cc27b786a1ea2d8bb81.png" alt="" />
      </div>
      <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='bg-white p-4 h-[30%] relative'>
          <h4 className='font-bold text-2xl'>Find a trip</h4>
          <form onSubmit={(e) => {
            submitHandler(e)
          }}>
            <div className='line absolute h-12 w-1 top-[50%] bg-gray-800 rounded-2xl left-10'></div>
            <input 
            onClick={()=>{
              setPanelOpen(true)
            }}
            value={pickup}
            onChange={(e)=>{
              setPickup(e.target.value)
            }} 
            className='w-full bg-gray-100 py-3 px-12 rounded-lg mt-3' 
            type="text" 
            placeholder='Add a pick-up location'/>
            <input 
            className='w-full bg-gray-100 py-3 px-12 rounded-lg mt-5' 
            type="text" 
            placeholder='Enter your destination'
            value={destination}
            onChange={(e)=>{
              setDestination(e.target.value)
            }} />
          </form>
        </div>
        <div className=' bg-red-500 h-[0]'>

        </div>
      </div>
    </div>
  )
}

export default Home