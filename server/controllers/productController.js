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

module.exports = { addProduct };
