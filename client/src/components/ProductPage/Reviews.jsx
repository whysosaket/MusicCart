import React from 'react'
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

const Reviews = () => {
  return (
    <div className='reviews'>
        <IoIosStar className='star' />
        <IoIosStar className='star' />
        <IoIosStar className='star' />
        <IoIosStar className='star' />
        <IoIosStarOutline className='star' />
        <span className='reviewscount'>(50 Customer reviews)</span>
    </div>
  )
}

export default Reviews