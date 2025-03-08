import React, { createContext, useState } from 'react'

export const CaptainDataContext = createContext()

const CaptainContext = ({children}) => {
    const [captain, setCaptain] = useState({
        fullname: {
            firstname: '',
            lastname: ''
        },
        email: '',
        vehicle: {
            color: '',
            plate: '',
            capacity: '',
            vehicleType: ''
        }
    })
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
  return (
    <div>
    <CaptainDataContext.Provider value={{ captain, setCaptain, isLoading, setIsLoading, error, setError }}>
        {children}
    </CaptainDataContext.Provider>
    </div>
  )
}

export default CaptainContext