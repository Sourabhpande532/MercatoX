const Order = require("../model/Order");
const CartStore = require("../model/CartItem");

exports.obtainedOrders = async (req, res) => {
  try {
    const userId = req.query.userId || "default";
    const orders = await Order.find({ userId }).populate("items.product");
    return res.status(200).json({
      success: true,
      message: "Orders fetched successfully",
      data: { orders },
    });
  } catch (error) {
    console.error("Error fetching orders:", error.message);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch orders",
      error: error.message,
    });
  }
};

exports.createOrder = async (req, res) => {
  try {
    const {
      userId = "default",
      items,
      total,
      address,
      product,
      qty = 1,
    } = req.body;
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Items is required and should be a non-empty array",
      });
    }
    if (total === undefined) {
      return res.status(400).json({
        success: false,
        message: "Total is required",
      });
    }
    const order = await Order.create({ userId, items, total, address });
    await CartStore.deleteMany({ userId });
    return res.status(200).json({
      success: true,
      message: "Order created successfully",
      data: { order },
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      success: false,
      message: "Error during create order",
      error: error.message,
    });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const deleted = await Order.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Order not found.",
      });
    }
  } catch (error) {
    console.error("Error deleting order:", error.message);
    return res.status(500).json({
      success: false,
      message: "Failed to delete order",
      error: error.message,
    });
  }
};
