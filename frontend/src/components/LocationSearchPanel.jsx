import React from 'react'

const LocationSearchPanel = (props) => {

    const locations = [
        "24B,Near Kapoors cafe, Sheyians Coding School, Bhopal",
        "20C,Near mano cafe, Sheyians Coding School, Bhopal",
        "44A,Near starbugs cafe, Sheyians Coding School, Bhopal",
        "18B,Near papu cafe, Sheyians Coding School, Bhopal",
    ]
    return (
        <div className=''>
            {/*this is sample data*/}
            {
                locations.map((e,index)=>{
                    return (
                        <div onClick={()=>{
                            props.setVehiclePanel(true)
                            props.setPanelOpen(false)
                        }} key={index} className='border-gray-200 border-2  active:border-black rounded-lg flex flex-row gap-4 mb-2 items-center justify-start px-3'>
                            <h2><i className="ri-map-pin-fill"></i></h2>
                            <h4 className='font-medium'>{e}</h4>
                        </div>
                    )
                })
            }
            
             
        </div>
    )
}

export default LocationSearchPanel