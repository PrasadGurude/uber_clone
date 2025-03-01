import React from 'react'
import { Link } from 'react-router-dom'

const CaptainHome = () => {
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
        <div className='flex justify-between px-2 py-1 mb-2 border-b-1 border-gray-300'>
          <div className='flex items-center gap-2'> 
            <img className='h-15 bg-gray-100 rounded-full p-2 ' src="https://th.bing.com/th/id/OIP.qSzcbkUC_fFYizN0IpcT8wHaK_?rs=1&pid=ImgDetMain" alt="" />
            <h4 className='text-lg font-bold'>Prasad Gurude</h4>
          </div>

          <div>
            <h4 className='text-xl font-semibold'>₹295.2</h4>
            <p className='font-medium'>Earned</p>
          </div>
        </div>
        <div className='flex p-3 bg-gray-200 rounded-xl justify-between items-center text-center'>
          <div className=''>
            <i className="ri-time-line text-3xl font-thin "></i>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>
          </div>
          <div>
            <i className="ri-speed-up-line text-3xl font-thin "></i>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>
          </div>
          <div>
            <i className="ri-booklet-line text-3xl font-thin "></i>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaptainHome