import React, {useContext} from 'react'
import CartContext from '../../context/cartContext'

const ProductButtons = (props) => {
  const {addToCart} = useContext(CartContext);
  return (
    <div className='buttons'>
        <button onClick={()=>addToCart(props.id)} className='addtocart'>Add to Cart</button>
        <button className='buynow'>Buy Now</button>
    </div>
  )
}

export default ProductButtons