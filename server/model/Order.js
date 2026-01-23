const mongoose = require("mongoose");
const OrderSchema = new mongoose.Schema({
  userId: { type: String },
  items: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "ShoppingProduct" },
      qty: Number,
    },
  ],
  total: Number,
  address: Object,
  createdAt: { type: Date, dafault: Date.now },
});
module.exports = mongoose.model("ShoppingOrder", OrderSchema);
