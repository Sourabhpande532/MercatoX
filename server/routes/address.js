const express = require("express");
const app = express.Router();
const addressCtrl = require("../controllers/addressController");

app.get("/", addressCtrl.getUserAddress);
app.post("/", addressCtrl.createAddress);

module.exports = app;
