const mongoose = require("mongoose");
const WishlistSchema = new mongoose.Schema({
  userId: { type: String },
  product: { type: mongoose.Schema.Types.ObjectId, ref: "ShoppingProduct" },
});
module.exports = mongoose.model("ShoppingWishlist", WishlistSchema);
