import React from 'react'
import Logo from '../components/Logo'
import '../css/Auth.css'
import LoginForm from '../components/AuthPages/LoginForm'
import Divider from '../components/AuthPages/Divider'

const Login = () => {
  return (
    <div className='login'>
      <div className='logincontainer'>
        <Logo />
        <LoginForm />
        <Divider />
        <button className='createaccount'>Create your Musicart account</button>
      </div>
    </div>
  )
}

export default Login