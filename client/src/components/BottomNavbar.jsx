import React, {useContext} from 'react'
import "../css/BottomNavbar.css"
import { GoHome } from "react-icons/go";
import { MdAddShoppingCart } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { Link, useLocation } from 'react-router-dom';
import GlobalContext from '../context/GlobalContext';

const BottomNavbar = () => {
    const { handleLogout, isAuthenticated } = useContext(GlobalContext);
  return (
    <div className='mobile bottomnavbar'>
        <Link to="/" className='bottomnavbar-item active'>
            <GoHome className='bottomnavbar-icon' />
            <p className='bottomnavbar-text'>Home</p>
        </Link>
        <Link to="/cart" className='bottomnavbar-item'>
            <MdAddShoppingCart className='bottomnavbar-icon' />
            <p className='bottomnavbar-text'>Cart</p>
        </Link>
        {
            isAuthenticated ? (
                <div className='bottomnavbar-item'>
                    <BsPerson className='bottomnavbar-icon' />
                    <p className='bottomnavbar-text'>Logout</p>
                </div>
            ) : (
                <Link to="/login" className='bottomnavbar-item'>
                    <BsPerson className='bottomnavbar-icon' />
                    <p className='bottomnavbar-text'>Login</p>
                </Link>
            )
        }
    </div>
  )
}

export default BottomNavbar