import React from 'react'

const LookingForDriver = (props) => {
  return (
    <div className=''>
    <h5
        onClick={() => {
            props.setVehicleFound(false)
        }}
        className='absolute top-0 right-3  text-2xl '>
        <i className="ri-arrow-down-wide-fill"></i>
    </h5>
    <h3 className='text-2xl font-semibold mb-3 px-4'>Looking for a Ride</h3>
    <div className=' flex justify-between items-center flex-col'>
        <img className='h-30 mb-3' src="https://www.asaproadworthys.com.au/wp-content/uploads/2021/11/Select-768x431.jpeg" alt="" />
        
        <div className='w-full border-t-1 border-gray-300 '>
            <div className='flex  items-center px-5 pt-2 '>
                <i className="ri-map-pin-range-fill text-xl mr-4"></i>
                <div>
                    <h3 className='text-xl font-bold'>562/11-A</h3>
                    <p className='text-sm'>Kankariya Talab , Bhopal</p>
                </div>
            </div>
            <div className='flex items-center px-5 py-2 '>
                <i className="ri-square-fill text-lg mr-4"></i>
                <div className='border-y-1 py-2 border-gray-300'>
                    <h3 className='text-xl font-bold'>Third Wave Coffee</h3>
                    <p className='text-sm'>17th Cross Rd, PWD Quarters, 1st Sector, HSR Layout, Bengaluru, Karnataka</p>
                </div>
            </div>
            <div className='flex items-center px-5 pb-2'>
            <i className="ri-bank-card-2-fill text-lg mr-4"></i>                        <div>
                    <h3 className='text-xl font-bold'>₹193.20</h3>
                    <p className='text-sm'>Cash Cash</p>
                </div>
            </div>
            
        </div>
    </div>
</div>
  )
}

export default LookingForDriver