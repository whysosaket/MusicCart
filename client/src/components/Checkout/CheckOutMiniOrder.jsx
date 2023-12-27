import React from 'react'

const CheckOutMiniOrder = () => {
  return (
    <div className='miniorder'>
        <div className='ll'>
            <button className='placeorder'>Place your order</button>
        </div>
        <div className='lr p'>
            <h1>Order Total : ₹3545.00</h1>
            <p>By placing your order, you agree to Musicart privacy notice and conditions of use.</p>
        </div>
    </div>
  )
}

export default CheckOutMiniOrder