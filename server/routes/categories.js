const express = require("express");
const app = express.Router();
const Category = require("../model/Category");

async function getAllCategories() {
  try {
    const category = await Category.find();
    return category;
  } catch (error) {
    console.error("Failed to fetch data,Db error", error.message);
    throw error;
  }
}
// GET CATEGORIES
app.get("/", async (req, res) => {
  try {
    const category = await getAllCategories();
    if (category.length > 0) {
      return res.status(200).json({
        success: true,
        message: "Category created successfully",
        data: { categories: category },
        meta: {
          timestamp: new Date(),
          requestId: "REQ-" + Date.now(),
        },
      });
    } else {
      return res
        .status(404)
        .json({ success: false, message: "Category not found!" });
    }
  } catch (error) {
    console.error("Interanl error, Fetching data", error.message);
    res.status(500).json({
      success: false,
      message: "Internal error! Failed to fetch categories",
      error: error.message,
    });
  }
});

// ADD CATEGORY
async function addCategoryToDatabase(data) {
  try {
    const category = new Category(data);
    const saved = await category.save();
    return saved;
  } catch (error) {
    console.error("Failed to add category:", error.message);
    throw error;
  }
}

app.post("/", async (req, res) => {
  try {
    const payload = req.body;
    const { name, image } = payload;
    if (!name || !image) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields!" });
    }
    const category = await addCategoryToDatabase(payload);
    if (category) {
      res.status(200).json({
        success: true,
        message: "Category created Successfully!",
        data: { category },
      });
    } else {
      res.status(404).json({ success: false, message: "Category not found." });
    }
  } catch (error) {
    console.error("Adding category Server error!", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to add category!",
      error: error.message,
    });
  }
});

module.exports = app;