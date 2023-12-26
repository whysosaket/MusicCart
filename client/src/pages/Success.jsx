import React from 'react'
import Confetti from "../assets/confetti.png"
import '../css/Success.css'

const Success = () => {
  return (
    <div className='success'>
    <div className='innerdiv'>
        <img src={Confetti} alt='confetti' />
        <h1>Order is placed successfully!</h1>
        <p>You  will be receiving a confirmation email with order details</p>
        <button className='goback'>Go back to Home page</button>
    </div>
    </div>
  )
}

export default Success