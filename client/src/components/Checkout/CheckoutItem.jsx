import React from 'react'
import ProductImage from "../../assets/product.png"

const CheckoutItem = () => {
  return (
    <div className='checkoutitem'>
        <img src={ProductImage} alt='product' />
        <h1>Sony WH-CH720N</h1>
        <h3>Clour : Black</h3>
        <h3>In Stock</h3>
        <h2>Estimated delivery :</h2>
        <h2>Monday — FREE Standard Delivery</h2>
    </div>
  )
}

export default CheckoutItem