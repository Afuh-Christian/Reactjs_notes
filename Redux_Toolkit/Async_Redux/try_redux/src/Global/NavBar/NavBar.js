import { useRef } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

import React from 'react'
import './NavBar.css'

//npm install react-icons
export default function NavBar() {
    const navRef = useRef()

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

  return (
    <header>
        <button className='nav-btn' onClick={showNavbar}>
            <FaBars/>
        </button>
        <nav ref={navRef}>
            <div  onClick={showNavbar}>Home</div>
            <div  onClick={showNavbar}>Store</div>
            <div  onClick={showNavbar}>Message</div>
            <div  onClick={showNavbar}>Login</div>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <FaTimes/>
            </button>
        </nav>
        <div>Ziddd</div>
    </header>
  )
}
