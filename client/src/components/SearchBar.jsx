import React from 'react'
import "../css/Home/SearchBar.css"
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className='search'>
        <IoIosSearch className='icon' />
        <input type="text" placeholder='Search Product' />
    </div>
  )
}

export default SearchBar