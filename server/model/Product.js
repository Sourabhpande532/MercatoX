const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, min: 0, max: 5, default: 0 },
  images: [String],
  discount: { type: Number, default: 0 },
  offPrice: Number,
  sizes: { type: [String] },
  deliveryCharge: { type: Number, default: 0 },
  description: { type: String },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ShoppingCategory",
  },
  countInStock: { type: Number, default: 0 },
});

module.exports = mongoose.model("ShoppingProduct", ProductSchema);
