import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Home from './pages/Home'
import Login from './pages/Login'


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
        </Routes>
      
     </div>
     <Footer />
     </Router>
    </>
  )
}

export default App
