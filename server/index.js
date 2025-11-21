const express = require("express");
const { DatabaseInitialization } = require("./db/db.connect");
const app = express();
DatabaseInitialization();
app.get("/", (req, res) => {
  res.send("Hello, Welcome express routes");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
