const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

router.get("/", (req, res) => {
  const videos = JSON.parse(fs.readFileSync("./data/videos.json"));
  res.send(videos);
});

// Gets all videos
router.get("/videos", (req, res) => {
  const videos = JSON.parse(fs.readFileSync("./data/videos.json"));
  res.send(videos);
});

// Gets a video
router.get("/videos/:id", (req, res) => {
  const videos = JSON.parse(fs.readFileSync("./data/videos.json"));
  const findVideo = videos.find((video) => video.id === req.params.id);
  res.send(findVideo);
});

// Adds video to videos.json
router.post("/videos", (req, res) => {
  const newVideo = {
    id: uuidv4(),
    image: "default.jpeg",
    reviews: [],
  };
  console.log(req.body);
  res.send("This has been posted");
});

module.exports = router;
