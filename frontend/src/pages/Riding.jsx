import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
    return (
        <div className='h-screen'>
            <Link to={'/home'} className="fixed w-10 right-2 top-2 h-10 bg-white items-center flex justify-center rounded-full">
            <i className="ri-home-4-line text-lg font-semibold"></i>
            </Link>
            <div className='h-1/2'>
                <img className='h-full w-full object-cover' src="https://uploads.disquscdn.com/images/abf0ee2a43831d4bafc38d5d4e8671317af55edb03da2cc27b786a1ea2d8bb81.png" alt="" />
            </div>
            <div className='h-1/2'>
                <div className='flex items-center justify-between px-5 py-3'>
                    <img className='h-10 ' src="https://www.asaproadworthys.com.au/wp-content/uploads/2021/11/Select-768x431.jpeg" alt="" />
                    <div className='flex flex-col items-end '>
                        <h2 className='text-lg font-medium'>Sarthak</h2>
                        <h4 className='text-xl font-semibold -mt-1 -mb-1'>MP04 AB 1234</h4>
                        <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
                    </div>
                </div>
                <div className=' flex flex-col'>
                    <div className='w-full border-t-1 border-gray-300 '>
                        <div className='flex items-center px-5 pt-2 '>
                            <i className="ri-map-pin-range-fill text-xl mr-4"></i>
                            <div className='border-b-1 border-gray-300 pb-2 w-full'>
                                <h3 className='text-xl font-bold'>562/11-A</h3>
                                <p className='text-sm'>Kankariya Talab , Bhopal</p>
                            </div>
                        </div>
                        <div className='flex items-center px-5 pb-2 pt-1'>
                            <i className="ri-bank-card-2-fill text-lg mr-4"></i>                        <div>
                                <h3 className='text-xl font-bold'>₹193.20</h3>
                                <p className='text-sm'>Cash Cash</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center w-full mt-6'>
                        <button className='py-2 bg-green-500 w-[90%] rounded-lg text-white  '>Make Payment</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Riding