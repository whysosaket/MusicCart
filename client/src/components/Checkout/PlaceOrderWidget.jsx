import React from 'react'

const PlaceOrderWidget = () => {
  return (
    <div className='placeorderwidget'>
        <button>Place your order</button>
        <p>By placing your order, you agree to Musicart privacy notice and conditions of use.</p>
        <hr />
        <h1>Order Summary</h1>
        <div className='orderrow'>
            <span>Items</span>
            <span>₹3545.00</span>
        </div>
        <div className='orderrow'>
            <span>Delivery</span>
            <span>₹50.00</span>
        </div>
        <hr />
        <div className='orderrow'>
            <h1>Order Total</h1>
            <h1>₹3595.00</h1>
        </div>
    </div>
  )
}

export default PlaceOrderWidget