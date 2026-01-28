const express = require("express");
const app = express.Router();
const orderCtrl = require("../controllers/orderController");

app.get("/", orderCtrl.obtainedOrders);
app.post("/", orderCtrl.createOrder);
app.delete("/:id", orderCtrl.deleteOrder);

module.exports = app;
