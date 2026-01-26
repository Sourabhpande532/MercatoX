const express = require("express");
const app = express.Router();
const orderCtrl = require("../controllers/orderController");

app.get("/", orderCtrl.obtainedOrders);
app.post("/", orderCtrl.createOrder);

module.exports = app;
