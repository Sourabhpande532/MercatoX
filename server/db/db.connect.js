const mongoose = require("mongoose");
require("dotenv").config();

const mongoUrl = process.env.MONGO_URL;
const DatabaseInitialization = async() => {
  try {
    const connection = await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    if (connection) {
      console.log("Connected DB!");
    }
  } catch (error) {
    console.error("DB Failed:", error.message);
    console.log("DB Connection Failed!");
  }
};
module.exports = { DatabaseInitialization };
