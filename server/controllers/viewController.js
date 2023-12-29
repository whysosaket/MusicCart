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
    let products = await Product.find({}, "name color type price image description");

    let types = new Set();
    let brands = new Set();
    let colors = new Set();

    products.forEach((product) => {
      types.add(product.type);
      brands.add(product.brand);
      colors.add(product.color);
    });

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
    });
    let types = new Set();
    let brands = new Set();
    let colors = new Set();

    products.forEach((product) => {
      types.add(product.type);
      brands.add(product.brand);
      colors.add(product.color);
    });
    return res.json({ success: true, products, types, brands, colors });
  } catch (err) {
    console.log(err);
    return res.json({ success: false, error: "Internal Server Error!" });
  }
};

const sortProducts = async (req, res) => {
  try {
    const sortType = req.body.sortType;
    switch (sortType){
      case "priceasc":
        var products = await Product.find({}, "name color type price image description").sort({price: 1});
        break;
      case "pricedesc":
        var products = await Product.find({}, "name color type price image description").sort({price: -1});
        break;
        case "nameasc":
          var products = await Product.find({}, "name color type price image description")
            .sort({ name: 1 })
            .collation({ locale: 'en', strength: 2 });
          break;
        case "namedesc":
          var products = await Product.find({}, "name color type price image description")
            .sort({ name: -1 })
            .collation({ locale: 'en', strength: 2 });
          break;
      default:
        var products = await Product.find({}, "name color type price image description");
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

    return res.json({ success: true, products, types, brands, colors });
  } catch (err) {
    console.log(err);
    return res.json({ success: false, error: "Internal Server Error!" });
  }
};

module.exports = { getAllProducts, getProductById, getProductByNames, sortProducts };