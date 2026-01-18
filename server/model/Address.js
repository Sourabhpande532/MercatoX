const mongoose = require("mongoose");
const addressSchema = new mongoose.Schema({
  userId: { type: String },
  name: { type: String, required: true },
  street: { type: String, required: true },
  city: String,
  state: String,
  zip: String,
  phone: { type: String, required: true },
});
module.exports = mongoose.model("ShoppingAddress", addressSchema);
