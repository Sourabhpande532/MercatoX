const express = require("express");
const app = express.Router();
const Wishlist = require("../model/Wishlist");
const addWishlistToDatabase = async (payload) => {
  try {
    const wishlist = new Wishlist(payload);
    const savedWishlist = await wishlist.save();
    return savedWishlist;
  } catch (error) {
    console.error(error.message);
  }
};
app.post("/", async (req, res) => {
  try {
    const { userId = "default", productId } = req.body;
    if (!productId)
      return res
        .status(404)
        .json({ success: false, message: "productId is required" });
    const isWishlist = await Wishlist.findOne({ userId, product: productId });
    if (isWishlist) {
      const items = await Wishlist.find({ userId }).populate("product");
      return res.status(200).json({
        success: true,
        message: "Item already exists in wishlist",
        data: { wishlist: items },
      });
    }
    await addWishlistToDatabase({
      userId,
      product: productId,
    });
    const items = await Wishlist.find({
      userId,
    }).populate("product");
    return res.status(201).json({
      success: true,
      message: "Added Successfully",
      data: { wishlist: items },
    });
  } catch (error) {
    console.error("Error occured adding to wishlist", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to add wishlist",
      error: error.message,
    });
  }
});
module.exports = app;
