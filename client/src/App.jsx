import Banner from "./components/Banner"
import FilterBar from "./components/FilterBar"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
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
     </div>
     <Footer />
    </>
  )
}

export default App
