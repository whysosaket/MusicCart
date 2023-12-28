import React, {useContext, useEffect} from 'react'
import ProductItem from './ProductItem';
import "../../css/Home/Products.css"
import ProductItemListView from './ProductItemListView';
import ProductContext from '../../context/productContext';

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'a', 'b'];

const Products = () => {

  const {isList, getAllProducts, products} = useContext(ProductContext);

  useEffect(() => {
    getAllProducts();
  }, [])

  return (
    <div className={`${isList?'productlist':"productsgrid"} products `}>
        {products.map((item, index) => {
            if (isList) return <ProductItemListView item={item} key={index} />
            else return <ProductItem item={item} key={index} />
        })}
    </div>
  )
}

export default Products