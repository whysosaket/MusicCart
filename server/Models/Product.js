const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    brand: {
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    type: {
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    color: {
        type: String,
        required: true,
        min: 2,
        max: 255,
    },
    price: {
        type: Number,
        required: true,
        min: 1,
        max: 100000,
    },
    description: {
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    image: {
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    reviews: {
        type: Array,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
        min: 0,
        max: 100000,
        default: 0,
    },
    about: {
        type: Array
    }
});

module.exports = mongoose.model("product", productSchema);