import React, { useState, useEffect } from 'react'

export const UserDashboard = () => {
    const [user, setUser]= useState({})

    useEffect(() =>{
        const token= localStorage.getItem("token")
        if(token){
          fetch('http://localhost:3000/auto_login', {
            headers:{Authorization: `Bearer ${token}`}
          })
          .then(response => response.json())
          .then(data =>{
            setUser({data}) 
           })
        }
      }, [])
    return (
        <div>
            <h1>Your Dashboard</h1>
        </div>
    ) 
}
