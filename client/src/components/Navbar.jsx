import React from 'react'
import { Link } from 'react-router-dom';
import "../css/Navbar.css"
import { FiPhoneCall } from "react-icons/fi";

const Navbar = () => {
  return (
    <>
    <div className="navbar">
        <div className='contact navbar-item'>
            <FiPhoneCall className='phone-icon' />
            91212131313
        </div>
        <div className='navbar-item'>
            Get 50% off on selected items | Shop Now
        </div>
        <div className='loginsignup navbar-item'>
            <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link>
        </div>
    </div>
    <div className='extramargin'></div>
    </>
  )
}

export default Navbar