import React from 'react'
import "../../css/Product/ProductDescription.css"
import Reviews from './Reviews'
import PriceType from './PriceType'
import ProductAbout from './ProductAbout'
import BrandAvail from './BrandAvail'
import ProductButtons from './ProductButtons'

const ProductDescription = () => {
  return (
    <div className='productdescription'>
        <h2 className='productdescriptiontitle'>Sony WH-CH720N</h2>
        <Reviews />
        <PriceType />
        <ProductAbout />
        <BrandAvail />
        <ProductButtons />
    </div>
  )
}

export default ProductDescription