import React, {useContext} from 'react'
import ProductItem from './ProductItem';
import "../../css/Home/Products.css"
import ProductItemListView from './ProductItemListView';
import ProductContext from '../../context/productContext';

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'a', 'b'];

const Products = () => {

  const {isList} = useContext(ProductContext);

  return (
    <div className={`${isList?'productlist':"productsgrid"} products `}>
        {a.map((item, index) => {
            if (isList) return <ProductItemListView key={index} />
            else return <ProductItem key={index} />
        })}
    </div>
  )
}

export default Products