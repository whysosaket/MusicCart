import React from 'react'
import CartTotal from './CartTotal'
import CartItem from './CartItem'

const CartItems = (props) => {
  const {cart, total} = props;
  return (
    <div className='cartitems'>
        <hr />
            {cart.map((item) => (
                <CartItem key={item._id} item={item} />
            ))}
        <hr />
        <CartTotal total={total} len={cart.length} />
    </div>
  )
}

export default CartItems