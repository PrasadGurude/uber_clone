import React, { useContext, useEffect, useState } from 'react'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserProtectWrapper = ({
    children
}) => {
    const navigate = useNavigate()
    let token = localStorage.getItem('token')
    const [isLoading, setIsLoading] = useState(true)
    const {user , setUser } = useContext(UserDataContext)

    useEffect(() => {
        if (!token) {
            navigate('/login')
        }
        axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`,{
          headers:{
              Authorization: `Bearer ${token}`
          }
      }).then((response)=>{
          if(response.status === 200){
              const data = response.data
              setUser(data.user)
              setIsLoading(false)
          }
      }).catch(err=>{
          console.log(err)
          navigate('/login')
      })
    },[token])

    if(isLoading){
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

export default UserProtectWrapper