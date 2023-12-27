import React from 'react'
import CheckoutItem from './CheckoutItem'

const CheckoutReviewItems = () => {
  return (
    <div className='leftitem'>
        <div className='ll'>
            3. Review items and delivery
       </div>
       <div className='lr'>
            <CheckoutItem />
        </div>
    </div>
  )
}

export default CheckoutReviewItems