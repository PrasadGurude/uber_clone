import React from 'react'

const ConfirmRide = (props) => {
    return (
        <div>
            <h5
                onClick={() => {
                    props.setConfirmRidePanel(false)
                }}
                className='absolute top-0 right-3  text-2xl'>
                <i className="ri-arrow-down-wide-fill"></i>
            </h5>
            <h3 className='text-2xl font-semibold '>Confirm your Ride</h3>
            <div className='bg-amber-200 flex justify-between items-center'>
                <img className='h-50' src="https://i.pinimg.com/originals/93/c1/05/93c105244c0a3de81267a89cb13386f7.png" alt="" />
                <div className='w-full'>

                </div>
                <button className=''>Confirm</button>
            </div>
        </div>
    )
}

export default ConfirmRide