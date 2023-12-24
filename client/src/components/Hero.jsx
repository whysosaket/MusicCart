import React from 'react'
import "../css/Hero.css"
import { MdOutlineShoppingCart } from "react-icons/md";

const Hero = () => {
  return (
    <div className='hero'>
      <div className='heroleft'>
        <img src="logo.png" alt="logo" className='logo' />
        <span className='text'>Musicart</span>
        <span className='location'>Home</span>
      </div>
      <div className='heroright'>
          <button>
            <MdOutlineShoppingCart className='carticon' />
            View Cart
          </button>
      </div>
    </div>
  )
}

export default Hero