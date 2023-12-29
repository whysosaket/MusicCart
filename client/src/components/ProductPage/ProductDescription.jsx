import React, {useContext} from 'react'
import "../../css/Product/ProductDescription.css"
import Reviews from './Reviews'
import PriceType from './PriceType'
import ProductAbout from './ProductAbout'
import BrandAvail from './BrandAvail'
import ProductButtons from './ProductButtons'
import GlobalContext from '../../context/GlobalContext'
import LoginToBuy from './LoginToBuy'

const ProductDescription = (props) => {
  const {name, description,about, price, color, type, brand, rating, reviews, stock, _id} = props.item;
  const {isAuthenticated} = useContext(GlobalContext);
  return (
    <div className='productdescription'>
        <h2 className='productdescriptiontitle'>{name}{" ("}{color}{")"}</h2>
        <Reviews rating={rating} reviews={reviews} />
        <PriceType type={type} price={price} color={color} />
        <ProductAbout about={about}/>
        <BrandAvail brand={brand} stock={stock}/>
        {isAuthenticated ? <ProductButtons id={_id}/> : <LoginToBuy/>}
    </div>
  )
}

export default ProductDescription