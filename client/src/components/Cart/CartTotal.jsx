import React from 'react'

const CartTotal = (props) => {
  return (
    <div className='carttotal'>
        <div className='carttotalleft'>
            {props.len} Item
        </div>
        <div className='carttotalright'>
            ₹{props.total}
        </div>
    </div>
  )
}

export default CartTotal