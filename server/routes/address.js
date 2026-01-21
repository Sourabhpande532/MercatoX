const express = require("express");
const app = express.Router();
const addressCtrl = require("../controllers/addressController");

app.get("/", addressCtrl.getUserAddress);
app.post("/", addressCtrl.createAddress);
app.put("/:id", addressCtrl.updateAddress);
app.delete("/:id", addressCtrl.deleteAddress);

module.exports = app;
