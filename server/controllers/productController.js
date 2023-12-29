const dotenv = require("dotenv");
dotenv.config();

const jwt = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const Product = require("../models/Product");

const JWT_SECRET = process.env.JWT_SECRET;

const sampleAbout = [
  "Brand's lightest Wireless Noise-cancelling headband ever",
  "Up to 50-hour battery life with quick charging (3 min charge for up to 1 hour of playback)",
  "Multi-Point Connection helps to pair with two Bluetooth devices at the same time",
  "Take noise cancelling to the next level with Brand's Integrated Processor V1,so you can fully immerse yourself in the music",
  "Super comfortable and lightweight design ( 192 Grams )",
  "High sound quality and well-balanced sound tuning",
];


const addToCart = async (req, res) => {
  try {
    const { id } = req.body;
    const user = await User.findById(req.user.id);
    const product = await Product.findById(id);
    if (!product) {
      return res.json({ success: false, error: "Product does not exist!" });
    }
    if (user.cart.includes(id)) {
      return res.json({ success: false, error: "Product already exists in cart!" });
    }
    await User.findByIdAndUpdate(req.user.id, { cart: [...user.cart, id] });
    return res.json({ success: true });
  } catch (err) {
    console.log(err);
    return res.json({ success: false, error: "Internal Server Error!" });
  }
}

const removeFromCart = async (req, res) => {
  try {
    const { id } = req.body;
    const user = await User.findById(req.user.id);
    if (!user.cart.includes(id)) {
      return res.json({ success: false, error: "Product does not exist in cart!" });
    }
    await User.findByIdAndUpdate(req.user.id, { cart: user.cart.filter((item) => item !== id) });
    return res.json({ success: true });
  } catch (err) {
    console.log(err);
    return res.json({ success: false, error: "Internal Server Error!" });
  }
}


const getCart = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.json({ success: false, error: "User does not exist!" });
    }
    const products = await Product.find({ _id: { $in: user.cart } });
    return res.json({ success: true, products });
  } catch (err) {
    console.log(err);
    return res.json({ success: false, error: "Internal Server Error!" });
  }
}

const checkout = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.json({ success: false, error: "User does not exist!" });
    }
    await User.findByIdAndUpdate(req.user.id, { cart: user.cart.filter((item) => item !== id) });
    await User.findByIdAndUpdate(req.user.id, { orders: [...user.orders, id] });
    await User.findByIdAndUpdate(req.user.id, { cart: [] });
    return res.json({ success: true });
  } catch (err) {
    console.log(err);
    return res.json({ success: false, error: "Internal Server Error!" });
  }
}

const addProduct = async (req, res) => {
  try {
    const {
      name,
      brand,
      type,
      color,
      price,
      description,
      image,
      reviews,
      rating,
      stock,
    } = req.body;
    
    // for random sampling
    const about = sampleAbout
      .sort(() => 0.5 - Math.random())
      .slice(0, 4)
      .map((point) => point.replace("Brand", brand));

    const product = await Product.create({
        name,
        brand,
        type,
        color,
        price,
        description,
        image,
        reviews,
        rating,
        stock,
        about,
    });
    return res.json({ success: true, product });
  } catch (err) {
    console.log(err);
    return res.json({ success: false, error: "Internal Server Error!" });
  }
};

module.exports = { addToCart, removeFromCart, getCart, checkout, addProduct };
