import React, { useState, useEffect } from 'react'
import { Events } from '../components/CalendarEvents/Events'

export const UserDashboard = () => {
    const [user, setUser]=useState({})
    // const [name, setName]= useState("")
    // const [username, setUsername]= useState("")
    const [events, setEvents]= useState([])

    useEffect(() =>{
        const token= localStorage.getItem("token")
        if(token){
          fetch('http://localhost:3000/auto_login', {
            headers:{Authorization: `Bearer ${token}`}
          })
          .then(response => response.json())
          .then(data => {
            setUser(data.user)
            setEvents(data.events)
          })
          console.log(user.full_name)
        }
      }, [])
    return (
        <div>
            <h1>Your Dashboard</h1>
           <h2>Hi {user.full_name}  </h2> 
            
        </div>
    ) 
}
