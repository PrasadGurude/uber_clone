import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CaptainDataContext } from '../context/CaptainContext'

const CaptainProtectWrapper = ({
    children
}) => {
    const {captain , setCaptain} = useContext(CaptainDataContext)
    const navigate = useNavigate()
    let token = localStorage.getItem('token')
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        if (!token) {
            navigate('/captain-login')
        }
        axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        }).then((response)=>{
            if(response.status === 200){
                const data = response.data
                setCaptain(data.captain)
                console.log(captain)
                setIsLoading(false)
            }
        }).catch(err=>{
            console.log(err)
            navigate('/captain-login')
        })
    }, [token])
    
    if (isLoading) {
        return (
            <div>Loading..</div>
        )
    }

    return (
        <div>
            {children}
        </div>
    )
}

export default CaptainProtectWrapper