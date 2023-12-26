import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Product from './pages/Product'


function App() {
  

  return (
    <>
    <Router>
     <Navbar />
     <div className="container">
       <Hero />
      
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      
     </div>
     <Footer />
     </Router>
    </>
  )
}

export default App
