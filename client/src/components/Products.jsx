import React from 'react'
import ProductItem from './ProductItem';
import "../css/Home/Products.css"

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'a', 'b'];

const Products = () => {

  return (
    <div className='products'>
        {a.map((item, index) => {
            return <ProductItem key={index} />
        })}
    </div>
  )
}

export default Products