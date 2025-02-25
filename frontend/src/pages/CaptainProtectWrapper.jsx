import React, { useEffect } from 'react'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

const CaptainProtectWrapper = ({
    children
}) => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    const { isLoading, setIsLoading } = useContext(CaptainDataContext)
    setIsLoading(true)
    useEffect(() => {
        if (!token) {
            navigate('/captain-login')
        }
    }, [token])

    axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    }).then((response)=>{
        if(response.status === 200){
            const data = response.data
            setCaptain(data.captain)
            setIsLoading(false)
        }
    }).catch(err=>{
        console.log(err)
        navigate('/captain-login')
    })
    
    if (isLoading) {
        <div>Loading..</div>
    }

    return (
        <div>
            {children}
        </div>
    )
}

export default CaptainProtectWrapper