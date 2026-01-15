const express = require("express");
const app = express.Router();
const Wishlist = require("../model/Wishlist");

const getAllWishlist = async (userId) => {
  try {
    const wishlist = await Wishlist.find({ userId }).populate("product");
    return wishlist;
  } catch (error) {
    console.error(error.message);
  }
};

app.get("/", async (req, res) => {
  try {
    const userId = req.query.userId || "default";
    const wishlist = await getAllWishlist(userId);
    if (wishlist.length > 0) {
      return res.json({
        success: true,
        message: "Wishlist Added",
        data: { wishlist },
      });
    } else {
      return res.json({ success: false, message: "wishlist not found." });
    }
  } catch (error) {
    console.error(error.message);
    res.json(500).json({
      success: false,
      message: "Server error wishlist",
      err: error.message,
    });
  }
});

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

app.delete("/:id", async (req, res) => {
  try {
    const wishlist = await Wishlist.findByIdAndDelete(req.params.id);
    if (!wishlist)
      return res
        .json(404)
        .json({ success: false, message: "Wishlist item not found." });
    res.status(200).json({ success: true, message: "Deleted wishlist" });
  } catch (error) {
    console.error(error.message);
    res.json(500).json({
      success: false,
      message: "Failed to delete wishlist",
      err: error.message,
    });
  }
});
module.exports = app;
