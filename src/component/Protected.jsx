import React, {  useEffect, useState } from 'react'
import { auth } from '../Config/method'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'

const Protected = ({component}) => {
    const [user,setIsUser] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsUser(true)
                return
            }
            // alert("Please login your account")  
            navigate('/')
        })
    }, [])
  return (
   <>{user ? component : <h1>Loading..</h1> }</>
  )
}

export default Protected