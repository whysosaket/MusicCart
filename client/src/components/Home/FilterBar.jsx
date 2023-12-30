import React, { useEffect } from "react";
import "../../css/Home/FilterBar.css";
import { IoGrid, IoGridOutline } from "react-icons/io5";
import { TiThList, TiThListOutline } from "react-icons/ti";
import { useContext, useState } from "react";
import ProductContext from "../../context/ProductContext";

const FilterBar = () => {
  const { isList, setIsList, types, brands, colors, sortFilterProducts, isSearch } =
    useContext(ProductContext);
  const [selectedType, setSelectedType] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedSort, setSelectedSort] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "type_filter") setSelectedType(e.target.value);
    else if (e.target.name === "brand_filter") setSelectedBrand(e.target.value);
    else if (e.target.name === "color_filter") setSelectedColor(e.target.value);
    else if (e.target.name === "price_filter") setSelectedPrice(e.target.value);
    else if (e.target.name === "sort") setSelectedSort(e.target.value);

    let selectedTypeD = selectedType ? selectedType : "";
    let selectedBrandD = selectedBrand ? selectedBrand : "";
    let selectedColorD = selectedColor ? selectedColor : "";
    let selectedPriceD = selectedPrice ? selectedPrice : "0,100000000";
    let selectedSortD = selectedSort ? selectedSort : "featured";

    if (e.target.name === "type_filter") selectedTypeD = e.target.value;
    else if (e.target.name === "brand_filter") selectedBrandD = e.target.value;
    else if (e.target.name === "color_filter") selectedColorD = e.target.value;
    else if (e.target.name === "price_filter") selectedPriceD = e.target.value;
    else if (e.target.name === "sort") selectedSortD = e.target.value;

    let minPrice = selectedPriceD.split(",")[0];
    let maxPrice = selectedPriceD.split(",")[1];
    minPrice = parseInt(minPrice);
    maxPrice = parseInt(maxPrice);

    console.log(
      selectedSortD,
      selectedBrandD,
      selectedTypeD,
      selectedColorD,
      minPrice,
      maxPrice
    );

    sortFilterProducts(
      selectedSortD,
      selectedBrandD,
      selectedTypeD,
      selectedColorD,
      minPrice,
      maxPrice,
      isSearch
    );
  };

  useEffect(() => {
      setSelectedType("");
      setSelectedBrand("");
      setSelectedColor("");
      setSelectedPrice("");
      setSelectedSort("");
  }, [isSearch]);

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
      <div className="filter">
        <select
          onChange={handleChange}
          name="type_filter"
          id="type_filter"
          defaultValue=""
        >
          <option value="" disabled>
            Headphone Type
          </option>
          <option value="">All</option>
          {types.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>

        <select
          onChange={handleChange}
          name="brand_filter"
          id="brand_filter"
          defaultValue=""
        >
          <option value="" disabled>
            Brand
          </option>
          <option value="">Featured</option>
          {brands.map((brand, index) => (
            <option key={index} value={brand}>
              {brand}
            </option>
          ))}
        </select>

        <select
          onChange={handleChange}
          name="color_filter"
          id="color_filter"
          defaultValue=""
        >
          <option value="" disabled>
            Color
          </option>
          <option value="">Featured</option>
          {colors.map((color, index) => (
            <option key={index} value={color}>
              {color}
            </option>
          ))}
        </select>

        <select
          onChange={handleChange}
          name="price_filter"
          id="price_filter"
          defaultValue=""
        >
          <option value="" disabled>
            Price
          </option>
          <option value="">Featured</option>
          <option value="0,1000">₹0 - ₹1,000</option>
          <option value="1000,10000">₹1,000 - ₹10,000</option>
          <option value="10000,15000">₹10,000 - ₹15,000</option>
        </select>
      </div>
      <div className="sort">
        <select name="sort" id="sort" onChange={handleChange}>
          <option value="">Sort By: Featured</option>
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
