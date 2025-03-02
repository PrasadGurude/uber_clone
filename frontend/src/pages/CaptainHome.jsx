import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'

const CaptainHome = () => {

  const [ridePopupPanel, setridePopupPanel] = useState(true)
  const [ConfirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false)

  const ridePopupPanelRef = useRef(null);
  const confirmRidePopupPanelRef = useRef(null);

  useGSAP(function () {
    if (ridePopupPanel) {
      gsap.to(ridePopupPanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(ridePopupPanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [ridePopupPanel])

  useGSAP(function () {
    if (ConfirmRidePopupPanel) {
      gsap.to(confirmRidePopupPanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(confirmRidePopupPanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [ConfirmRidePopupPanel])

  return (
    <div className='h-screen'>
      <div className='fixed p-3 top-0 flex items-center justify-between w-full'>
        <img className='w-16 ' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="uber_logo" />
        <Link to={'/captain-home'} className=" w-10 h-10 bg-white items-center flex justify-center rounded-full">
          <i className="ri-logout-box-line text-lg font-semibold"></i>
        </Link>
      </div>
      <div className='h-3/5'>
        <img className='h-full w-full object-cover' src="https://uploads.disquscdn.com/images/abf0ee2a43831d4bafc38d5d4e8671317af55edb03da2cc27b786a1ea2d8bb81.png" alt="" />
      </div>
      <div className='h-2/5 p-4 '>
        <CaptainDetails />
      </div>
      <div ref={ridePopupPanelRef} className='fixed w-full  z-10 bottom-0  px-2 py-8 bg-white '>
        <RidePopUp setridePopupPanel={setridePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel} />
      </div>
      <div ref={confirmRidePopupPanelRef} className='fixed w-full  z-10 bottom-0 translate-y-full h-screen px-2 py-8 bg-white '>
        <ConfirmRidePopUp setConfirmRidePopupPanel={setConfirmRidePopupPanel} />
      </div>
    </div>
  )
}

export default CaptainHome