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
  const { title, description, image } = req.body;
  const newVideo = {
    id: uuidv4(),
    title: title,
    description: description,
    image: image || "../images/image1",
    views: "0",
    likes: "0",
    duration: "0:00",
    video: "https://example.com/video.mp4",
    timeStamp: Date.now(),
    comments: [],
  };

  try {
    const data = fs.readFileSync("../data/videos.json");
    const videos = JSON.parse(data);
    videos.push(newVideo);
    fs.writeFileSync("../data/videos.json", JSON.stringify(videos));
    res.status(201).json(newVideo);
  } catch (error) {
    console.log("error posting new videos", error);
    res.send("This has been posted");
  }
});

module.exports = router;
