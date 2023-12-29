import React from "react";
import "../../css/Home/FilterBar.css";
import { IoGrid, IoGridOutline } from "react-icons/io5";
import { TiThList, TiThListOutline } from "react-icons/ti";
import { useContext } from "react";
import ProductContext from "../../context/productContext";

const FilterBar = () => {
  const { isList, setIsList, types, brands, colors, sortProducts } = useContext(ProductContext);

  const handleSort = (e) => {
    sortProducts(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div className="filterbar">
      <div className="view">
        {isList ? (
          <>
            <IoGridOutline
              onClick={() => setIsList(false)}
              className="icon"
              size={19}
            />
            <TiThList
              onClick={() => setIsList(true)}
              className="icon"
              size={19}
            />
          </>
        ) : (
          <>
            <IoGrid
              onClick={() => setIsList(false)}
              className="icon"
              size={19}
            />
            <TiThListOutline
              onClick={() => setIsList(true)}
              className="icon"
              size={19}
            />
          </>
        )}
      </div>
      <div className="fliter">
        <select name="type_filter" id="type_filter">
          <option value="featured">Featured</option>
          <option value="inear">In-ear headphone</option>
          <option value="onear">On-ear headphone</option>
          <option value="overear">Over-ear headphone</option>
        </select>

        <select name="brand_filter" id="brand_filter">
          <option value="featured">Featured</option>
          <option value="sony">Sony</option>
          <option value="marshall">Marshall</option>
          <option value="inear">Ptron</option>
          <option value="inear">JBL</option>
          <option value="inear">Boat</option>
        </select>

        <select name="color_filter" id="color_filter">
          <option value="featured">Featured</option>
          <option value="black">Black</option>
          <option value="black">Blue</option>
          <option value="black">White</option>
          <option value="black">Brown</option>
        </select>

        <select name="price_filter" id="price_filter">
          <option value="featured">Featured</option>
          <option value="black">$0 - $1,000</option>
          <option value="black">$1,000 - $10,000</option>
          <option value="black">$10,000 - $15,000</option>
        </select>
      </div>
      <div className="sort">
        <select name="sort" id="sort" onChange={handleSort}>
          <option value="featured">Sort By: Featured</option>
          <option value="priceasc">Price: Lowest</option>
          <option value="pricedesc">Price: Highest</option>
          <option value="nameasc">Name: (A-Z)</option>
          <option value="namedesc">Name: (Z-A)</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
