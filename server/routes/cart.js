const express = require("express");
const app = express.Router();
const CartStore = require("../model/CartItem");

const getAllCartFromDb = async (userId) => {
  try {
    const carts = await CartStore.find({ userId }).populate("product");
    return carts;
  } catch (error) {
    console.error("Failed To Get Carts", error.message);
  }
};

app.get("/", async (req, res) => {
  try {
    const userId = req.query.userId || "default";
    const carts = await getAllCartFromDb(userId);
    if (carts.length > 0) {
      res.status(200).json({ success: true, data: { carts } });
    }
  } catch (error) {
    console.error("Failed to get Carts", error.message);
    res.status(500).json({
      success: false,
      message: "Server error/cart",
      error: error.message,
    });
  }
});

const getDetailsOfCart = async (payload) => {
  try {
    const cart = new CartStore(payload);
    const savedCart = await cart.save();
    return savedCart;
  } catch (error) {
    console.error("Failed To add cart", error.message);
  }
};
app.post("/", async (req, res) => {
  try {
    const payload = req.body;
    // FRONTEND
    const { userId = "default", productId, qty = 1, size = "" } = payload;

    if (!productId) {
      return res.status(400).json({
        success: false,
        message: "ProductId is required",
      });
    }
    let isUserThere = await CartStore.findOne({
      userId,
      product: productId,
      size,
    });
    if (isUserThere) {
      isUserThere.qty = isUserThere.qty + qty;
      await isUserThere.save();
    } else {
      isUserThere = await getDetailsOfCart({
        userId,
        product: productId,
        qty: Number(qty),
        size,
      });
    }
    const items = await CartStore.find({ userId }).populate("product");
    return res.status(200).json({
      success: true,
      message: "Item added to cart",
      data: { cart: items },
    });
  } catch (error) {
    console.error("Failed To add cart", error.message);
    res.status(500).json({
      success: false,
      message: "Server error/cart",
      error: error.message,
    });
  }
});

// UPDATE QTY
app.post("/:id", async (req, res) => {
  try {
    const payload = req.body;

    const { qty: updateQty,size } = payload;

    if (!updateQty)
      return res.json({ success: false, message: "qty is required" });

    const item = await CartStore.findById(req.params.id);

    if (!item)
      return res.json({ success: false, message: "Cart item not found" });

    item.qty = updateQty;
    await item.save();

    return res.json({
      success: true,
      message: "Cart item updated successfully",
      data: { item },
    });
  } catch (error) {
    console.error("Error Updating cart item:", error.message);
    res.json({
      success: false,
      message: "Failed to update cart item",
      error: error.message,
    });
  }
});

const deleteCartById = async (id) => {
  try {
    const cart = await CartStore.findByIdAndDelete(id);
    return cart;
  } catch (error) {
    console.error("Delete cart error", error.message);
  }
};

app.delete("/:id", async (req, res) => {
  try {
    const cart = await deleteCartById(req.params.id);
    if (!cart)
      return res
        .status(404)
        .json({ success: false, message: "Cart item not found" });
    res.json({ success: true, message: "Cart deleted!", data: cart });
  } catch (error) {
    console.error("Error failed to delete cart", error.message);
    res.json({
      success: false,
      message: "Failed to delete",
      error: error.message,
    });
  }
});

module.exports = app;
