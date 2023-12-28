import React from 'react'
import "../../css/Home/Search.css"
import { GoSearch } from "react-icons/go";

const Search = () => {
  return (
    <div className='search'>
      <GoSearch className="searchicon" />
      <input type="text" placeholder="Search Product" className="searchinput" />
    </div>
  )
}

export default Search