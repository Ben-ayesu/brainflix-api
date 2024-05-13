require("dotenv").config();
const { PORT, BACKEND_URL } = process.env;
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to brainflix");
});

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
