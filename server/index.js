const express = require("express");
const { DatabaseInitialization } = require("./db/db.connect");
const app = express();
const cors = require("cors");
DatabaseInitialization();
const options = {
  origin: "*",
  credential: true,
  optionSuccessStatus: true,
};
app.use(express.json());
app.use(cors(options));

// Routes
app.use("/api/categories", require("./routes/categories"));
app.use("/api/products", require("./routes/product"));
app.use("/api/cart", require("./routes/cart"));

app.get("/", (req, res) => {
  res.send("Hello, Welcome express routes");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
