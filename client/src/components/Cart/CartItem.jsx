import React from 'react'
import ProductImage from '../../assets/product.png'

const CartItem = () => {
  return (
    <div className='cartitem'>
        <div className='cartitemimage'>
            <img src={ProductImage} alt='product' />
        </div>
        <div className='cartiteminfo'>
            <h3>Sony WH-CH720N</h3>
            <p>Clour : Black</p>
            <p>In Stock</p>
        </div>
        <div className='cartitemprice'>
        <h3>Price</h3>
            ₹3500
        </div>
        <div className='cartitemquantity'>
            <h3>Quantity</h3>
            <select>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
            </select>
        </div>
        <div className='cartitemtotal'>
            <h3>Total</h3>
            ₹3500
        </div>
    </div>
  )
}

export default CartItem