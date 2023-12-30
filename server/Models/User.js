const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
  mobile: {
    type: String,
    required: true,
    min: 10,
    max: 10,
  },
  cart: [cartItemSchema]
});

const addCartItem = async (userId, productId) => {
  try {
    const user = await User.findById(userId);

    if (!user) {
      throw new Error('User not found');
    }

    const cartItem = user.cart.find((item) => item.productId == productId);

    if (cartItem) {
      cartItem.quantity++;
    } else {
      user.cart.push({ productId });
    }

    const updatedUser = await user.save();
    return updatedUser;
  } catch (error) {
    throw error;
  }
};

const User = mongoose.model("user", userSchema);

module.exports = { User, addCartItem};