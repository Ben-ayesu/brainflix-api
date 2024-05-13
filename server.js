require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const videoRoutes = require("./routes/videosRoutes");
const { PORT } = process.env;

app.use(express.json());
app.use(express.static("public"));

app.use(cors());

app.use(videoRoutes);

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
