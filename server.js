require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cars");
const videoRoutes = require("./routes/videosRoutes");
const { PORT, BACKEND_URL } = process.env;

app.use(express.json());
app.use(express.static("public"));

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to brainflix");
});

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
