const dotenv = require("dotenv");
dotenv.config();

const jwt = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const Product = require("../models/Product");

const convertToTitleCase = require("../utils/makeTitleCase");
const isValidName = require("../utils/isValidName");
const isValidMobile = require("../utils/isValidMobile");
const isValidEmail = require("../utils/isValidEmail");

const JWT_SECRET = process.env.JWT_SECRET;

const getAllProducts = async (req, res) => {
  try {
    let products = await Product.find({}, "name color type price image description brand");

    let types = new Set();
    let brands = new Set();
    let colors = new Set();

    products.forEach((product) => {
      types.add(product.type);
      brands.add(product.brand);
      colors.add(product.color);
    });

    types = Array.from(types);
    brands = Array.from(brands);
    colors = Array.from(colors);

    return res.json({ success: true, products, types, brands, colors });
  } catch (err) {
    console.log(err);
    return res.json({ success: false, error: "Internal Server Error!" });
  }
};

const getProductById = async (req, res) => {
  try {
    const products = await Product.findById(req.params.id);
    return res.json({ success: true, product: products });
  } catch (err) {
    console.log(err);
    return res.json({ success: false, error: "Internal Server Error!" });
  }
};

const getProductByNames = async (req, res) => {
  try {
    const products = await Product.find({
      name: { $regex: req.body.name , $options: "i" },
    }, "name color type price image description brand");
    let types = new Set();
    let brands = new Set();
    let colors = new Set();

    products.forEach((product) => {
      types.add(product.type);
      brands.add(product.brand);
      colors.add(product.color);
    });

    types = Array.from(types);
    brands = Array.from(brands);
    colors = Array.from(colors);

    return res.json({ success: true, products, types, brands, colors });
  } catch (err) {
    console.log(err);
    return res.json({ success: false, error: "Internal Server Error!" });
  }
};

const sortFilterProducts = async (req, res) => {
  try {
    const sortType = req.body.sortType? req.body.sortType : "featured";
    const company = req.body.company? req.body.company : "";
    const type = req.body.type? req.body.type : "";
    const color = req.body.color? req.body.color : "";
    const minPrice = req.body.minPrice? req.body.minPrice : 0;
    const maxPrice = req.body.maxPrice? req.body.maxPrice : 1000000;

     let products = await Product.find(
      {
        brand: { $regex: company, $options: "i" },
        type: { $regex: type, $options: "i" },
        color: { $regex: color, $options: "i" },
        price: { $gte: minPrice, $lte: maxPrice },
      },
      "name color type price image description brand"
    );
    
    switch (sortType){
      case "priceasc":
        products.sort((a, b) => a.price - b.price);
        break;
      case "pricedesc":
        products.sort((a, b) => b.price - a.price);
        break;
      case "nameasc":
        products.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "namedesc":
        products.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }
    let types = new Set();
    let brands = new Set();
    let colors = new Set();

    products.forEach((product) => {
      types.add(product.type);
      brands.add(product.brand);
      colors.add(product.color);
    });

    types = Array.from(types);
    brands = Array.from(brands);
    colors = Array.from(colors);

    return res.json({ success: true, products, types, brands, colors });
  } catch (err) {
    console.log(err);
    return res.json({ success: false, error: "Internal Server Error!" });
  }
};



module.exports = { getAllProducts, getProductById, getProductByNames, sortFilterProducts };