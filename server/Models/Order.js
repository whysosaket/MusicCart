const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderID: {
    type: String,
    required: true,
    unique: true,
  },
  orderDate: {
    type: Date,
    required: true,
  },
  orderStatus: {
    type: String,
    required: true,
  },
  orderTotal: {
    type: Number,
    required: true,
  },
  orderItems: {
    type: Array,
    required: true,
  },
  orderAddress: {
    type: String,
    required: true,
  },
  orderPayment: {
    type: String,
    required: true,
  },
  orderUser: {
    type: Mongo.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

module.exports = mongoose.model("order", orderSchema);
