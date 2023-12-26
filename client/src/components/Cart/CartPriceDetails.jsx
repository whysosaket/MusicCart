import React from 'react'
import CartValueInfo from './CartValueInfo'

const CartPriceDetails = () => {
  return (
    <div className='cartpricedetails'>
        <h4>PRICE DETAILS</h4>
        <CartValueInfo />
        <div className='total'>
            <span>Total Amount</span>
            <span>₹3500</span>
        </div>
        <button className='placeorder'>PLACE ORDER</button>
    </div>
  )
}

export default CartPriceDetails