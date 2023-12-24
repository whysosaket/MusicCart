import Banner from "./components/Banner"
import FilterBar from "./components/FilterBar"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import SearchBar from "./components/SearchBar"

function App() {
  

  return (
    <>
     <Navbar />
     <div className="container">
      <Hero />
      <Banner />
      <SearchBar />
      <FilterBar />
      <Products />
     </div>
     <Footer />
    </>
  )
}

export default App
