import React from 'react'
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

const Reviews = (props) => {
  return (
    <div className='reviews'>
        <IoIosStar className='star' />
        <IoIosStar className='star' />
        <IoIosStar className='star' />
        <IoIosStar className='star' />
        <IoIosStarOutline className='star' />
        <span className='reviewscount'>({props.reviews.length} Customer reviews)</span>
    </div>
  )
}

export default Reviews