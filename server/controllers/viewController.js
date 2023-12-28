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
    const products = await Product.find({});
    return res.json({ success: true, products });
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
      name: { $regex: req.params.name, $options: "i" },
    });
    return res.json({ success: true, products });
  } catch (err) {
    console.log(err);
    return res.json({ success: false, error: "Internal Server Error!" });
  }
};

module.exports = { getAllProducts, getProductById, getProductByNames };