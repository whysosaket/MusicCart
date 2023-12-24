import React from 'react'
import "../css/Navbar.css"
import { FiPhoneCall } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="navbar">
        <div className='contact navbar-item'>
            <FiPhoneCall className='phone-icon' />
            91212131313
        </div>
        <div className='navbar-item'>
            Get 50% off on selected items | Shop Now
        </div>
        <div className='loginsignup navbar-item'>
            Login | Signup
        </div>
    </div>
  )
}

export default Navbar