const express = require("express");
const app = express.Router();
const Product = require("../model/Product");

const addProductToDatabase = async (details) => {
  try {
    const product = new Product(details);
    const savedProduct = await product.save();
    return savedProduct;
  } catch (error) {
    console.error(error);
  }
};

app.post("/", async (req, res) => {
  try {
    const payload = req.body;
    const { title, price, rating, images } = payload;
    if (!title || !price || !rating || !images) {
      return res
        .status(400)
        .json({ success: true, message: "Missing required fields" });
    }
    const product = await addProductToDatabase(req.body);
    if (product) {
      res.status(201).json({ success: true, data: { product } });
    }
  } catch (error) {
    console.error("/product/error", error.message);
    res.status(500).json({ success: false, error: "Failed to add product" });
  }
});

app.get("/", async (req, res) => {
  try {
    const products = await Product.find().populate("category");
    if (products.length > 0) {
      res.status(200).json({ success: true, data: { products } });
    } else {
      res.status(404).json({ success: false, message: "Product not found." });
    }
  } catch (error) {
    console.error("Failed to get product", error.message);
    res.status(500).json({ success: false, message: "Server error/products" });
  }
});

app.get("/:productId", async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId).populate(
      "category"
    );
    if (!product)
      return res
        .status(404)
        .json({ success: false, message: "Product not found." });
    res.status(200).json({ success: true, data: { product } });
  } catch (error) {
    console.error("Error occured/productId", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = app;
