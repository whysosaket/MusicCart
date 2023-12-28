import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Success from './pages/Success'
import Checkout from './pages/Checkout'
import GlobalState from './context/globalState'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from './components/LoadingBar'


function App() {
  

  return (
    <>
    <GlobalState>
    <ToastContainer autoClose={1000} />
    <LoadingBar />
    <Router>
     <Navbar />
     <div className="container">
       <Hero />   
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<Success/>} />
          <Route path="/checkout" element={<Checkout/>} />
        </Routes>
     </div>
     <Footer />
     </Router>
      </GlobalState>
    </>
  )
}

export default App
