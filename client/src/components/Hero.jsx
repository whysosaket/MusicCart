import React from 'react'
import "../css/Hero.css"
import { MdOutlineShoppingCart } from "react-icons/md";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const dict = {
  "/login": "Login",
  "/signup": "Signup",
  "/product": "Product",
  "/cart": "View Cart",
  "/success": "Success",
  "/checkout": "Checkout",
}

const Hero = () => {
  const location = useLocation();
  if(location.pathname === "/login" || location.pathname === "/signup") return null;

  const title = dict[location.pathname];

  return (
    <div className='hero'>
      <div className='heroleft'>
        <Logo />
        <span className='location'>Home{title&&"/ "}{title}</span>
      </div>
      <div className='heroright'>
        {localStorage.getItem("token")&&
          <Link className='cartbtn' to="/cart">
            <MdOutlineShoppingCart className='carticon' />
            View Cart
          </Link>}
      </div>
    </div>
  )
}

export default Hero