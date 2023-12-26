import React from 'react'
import Banner from '../components/Banner'
import FilterBar from '../components/FilterBar'
import Products from '../components/Products'

const Home = () => {
  return (
    <div>
        <Banner />
        <FilterBar />
        <Products />
    </div>
  )
}

export default Home