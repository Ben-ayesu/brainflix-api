require("dotenv").config();
const { PORT } = process.env;
const express = require("express");
const cors = require("cors");
const app = express();
const videoRoutes = require("./routes/videosRoutes");

app.use(express.json());
app.use(express.static("public"));
app.use(cors());

app.use(videoRoutes);

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
