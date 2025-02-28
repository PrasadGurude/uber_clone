import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmRide from '../components/ConfirmRide'

const Home = () => {

  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const [vehiclePanel, setVehiclePanel] = useState(false)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)

  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const vehiclePanelRef = useRef(null)
  const confirmedRidePanelRef = useRef(null)

  const submitHandler = (e) => {
    e.preventDefault()
  }

  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        padding: '24'
        // opacity:1
      })
      gsap.to(panelCloseRef.current, {
        opacity: 1
      })
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        padding: '0'
        // opacity:0
      })
      gsap.to(panelCloseRef.current, {
        opacity: 0
      })
    }
  }, [panelOpen, panelCloseRef])

  useGSAP(function () {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [vehiclePanel])

  useGSAP(function () {
    if (confirmRidePanel) {
      gsap.to(confirmedRidePanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(confirmedRidePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [confirmRidePanel])


  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="uber_logo" />
      <div className='h-screen w-screen '>
        <img className='h-full ' src="https://uploads.disquscdn.com/images/abf0ee2a43831d4bafc38d5d4e8671317af55edb03da2cc27b786a1ea2d8bb81.png" alt="" />
      </div>
      <div className='flex flex-col justify-end h-screen absolute  top-0 w-full'>
        <div className='bg-white px-6 py-2 h-[30%] relative '>
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false)
            }}
            className='absolute top-0 right-3 opacity-0 text-2xl'>
            <i className="ri-arrow-down-wide-fill"></i>
          </h5>
          <h4 className='font-bold text-2xl'>Find a trip</h4>
          <form onSubmit={(e) => {
            submitHandler(e)
          }}>
            <div className='line absolute h-12 w-1 top-[50%] bg-gray-800 rounded-2xl left-10'></div>
            <input
              onClick={() => {
                setPanelOpen(true)
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value)
              }}
              className='w-full bg-gray-100 py-3 px-12 rounded-lg mt-3'
              type="text"
              placeholder='Add a pick-up location' />
            <input
              onClick={() => {
                setPanelOpen(true)
              }}
              className='w-full bg-gray-100 py-3 px-12 rounded-lg mt-5 '
              type="text"
              placeholder='Enter your destination'
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value)
              }} />
          </form>
        </div>
        <div ref={panelRef} className='bg-white  '>
          <LocationSearchPanel panelOpen={panelOpen} setPanelOpen={setPanelOpen} vehiclePanel={vehiclePanel} setVehiclePanel={setVehiclePanel} />
        </div>
      </div>
      <div ref={vehiclePanelRef} className='fixed w-full  z-10 bottom-0 translate-y-full px-2 py-8 bg-white '>
        <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />
      </div>
      <div ref={confirmedRidePanelRef} className='fixed w-full  z-10 bottom-0 translate-y-full  py-6 pt-12 bg-white '>
        <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} />
      </div>
    </div>
  )
}

export default Home