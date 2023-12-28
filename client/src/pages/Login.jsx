import React from 'react'
import Logo from '../components/Logo'
import '../css/Auth.css'
import LoginForm from '../components/AuthPages/LoginForm'
import Divider from '../components/AuthPages/Divider'
import { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

const Login = () => {
  const context = useContext(GlobalContext);
  const {login} = context;
  return (
    <div className='login'>
      <div className='logincontainer'>
        <Logo />
        <LoginForm meth={login} />
        <Divider />
        <button className='createaccount'>Create your Musicart account</button>
      </div>
    </div>
  )
}

export default Login