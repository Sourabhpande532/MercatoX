const mongoose = require("mongoose");
const CartSchema = new mongoose.Schema({
  userId: { type: String },
  product: { type: mongoose.Schema.Types.ObjectId, ref: "ShoppingProduct" },
  size: { type: String, default: "" },
  qty: { type: Number, default: 1 },
});

module.exports = mongoose.model("ShoppingCart", CartSchema);
