import React, { useState } from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import SideBar from '../components/Sidebar/Sidebar'


const Home = () => {
    const [isOpen, setIsOpen]= useState(false)

   const toggle = () => {
        setIsOpen(!isOpen)

   }

    return (
        <>
          <SideBar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} />
        </>
    )
}

export default Home
