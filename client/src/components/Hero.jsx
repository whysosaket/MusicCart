import React from 'react'
import "../css/Hero.css"
import { MdOutlineShoppingCart } from "react-icons/md";
import { useLocation } from 'react-router-dom';

const Hero = () => {
  const location = useLocation();
  if(location.pathname === "/cart" || location.pathname === "/checkout" || location.pathname === "/success" || location.pathname === "/login" || location.pathname === "/signup") return null;
  console.log(location.pathname);
  return (
    <div className='hero'>
      <div className='heroleft'>
        <img src="logo.png" alt="logo" className='logo' />
        <span className='text'>Musicart</span>
        <span className='location'>Home</span>
      </div>
      <div className='heroright'>
        {localStorage.getItem("token")&&
          <button>
            <MdOutlineShoppingCart className='carticon' />
            View Cart
          </button>}
      </div>
    </div>
  )
}

export default Hero