import React from 'react'

const CartValueInfo = () => {
  return (
    <div className='cartvalueinfo'>
        <div className='totalmrp'>
            <span>Total MRP</span>
            <span>₹3500</span>
        </div>
        <div className='discount'>
            <span>Discount on MRP</span>
            <span>₹0</span>
        </div>
        <div className='conv'>
            <span>Convenience Fee</span>
            <span>₹45</span>
        </div>
    </div>
  )
}

export default CartValueInfo