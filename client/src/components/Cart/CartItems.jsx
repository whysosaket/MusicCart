import React from 'react'
import CartTotal from './CartTotal'
import CartItem from './CartItem'

const CartItems = () => {
  return (
    <div className='cartitems'>
        <hr />
            <CartItem />
        <hr />
        <CartTotal />
    </div>
  )
}

export default CartItems