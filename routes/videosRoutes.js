const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const loadVideos = () => {
  return JSON.parse(fs.readFileSync("./data/videos.json"));
};

router.get("/", (req, res) => {
  res.send(loadVideos());
});

// Gets all videos
router.get("/videos", (req, res) => {
  res.send(loadVideos());
});

// Gets a video
router.get("/videos/:id", (req, res) => {
  const videos = loadVideos();
  const findVideo = videos.find((video) => video.id === req.params.id);
  res.send(findVideo);
});

// Adds video to videos.json
router.post("/videos", (req, res) => {
  const { title, description } = req.body; // from request
  // create video object
  const newVideo = {
    id: uuidv4(),
    title: title,
    channel: "Benjamin Ayesu",
    image: "http://localhost:5050/images/Upload-video-preview.jpg",
    description: description,
    views: "1,000,0000",
    likes: "1,543,234",
    duration: "10:00",
    video: "https://example.com/video.mp4",
    timestamp: Date.now(),
    comments: [
      {
        id: "2d818087-c1f4-4ec2-bcdc-b545fd6ec258",
        name: "Uzo Anayolisa",
        comment:
          "The historical perspective, combined with the technological advancements, offers a comprehensive view of how trains have shaped our world. I'm eager to learn more about the fascinating stories behind these incredible locomotives. Keep the railway adventures coming!",
        likes: 3,
        timestamp: 1701670662000,
      },
      {
        id: "191de346-b3c2-47b4-bf5b-6db90d1e3bdc",
        name: "Walid Marghub Haik",
        comment:
          "Your documentary on the history and technology of trains is a delightful treat for railway enthusiasts like me. The attention to detail and the chronological journey through time make it an educational and entertaining experience.",
        likes: 0,
        timestamp: 1701584262000,
      },
      {
        id: "52a21461-b0cc-43bc-a9d6-d52a7d4cedbe",
        name: "Araa Ghelamerda",
        comment:
          "While the cinematography is stunning, I'd appreciate more information on the conservation efforts featured in the video. Highlighting the challenges these incredible species face and the initiatives taken to protect them would add depth to the narrative and inspire viewers to contribute to conservation causes.",
        likes: 1,
        timestamp: 1680326262000,
      },
      {
        id: "bc913baf-ff2e-41f0-99cb-b7ef4dc70ab4",
        name: "Ambrus Gerzson",
        comment:
          "Can't wait for more documentaries that celebrate the harmony of our natural world!",
        likes: 2,
        timestamp: 1680239862000,
      },
      {
        id: "85e3621c-493a-41e0-b0f8-2734d102c7d9",
        name: "Hannah M. Laursen",
        comment:
          "The attention to detail and the storytelling make it an immersive experience. I'm curious about your favorite moments or encounters during the filming process. Share some behind-the-scenes stories if possible!",
        likes: 0,
        timestamp: 1680153462000,
      },
    ],
  };

  try {
    const data = fs.readFileSync("./data/videos.json");
    const videos = JSON.parse(data);
    videos.push(newVideo);
    fs.writeFileSync("./data/videos.json", JSON.stringify(videos));
    res.status(201).json(newVideo);
  } catch (error) {
    console.log("error posting new videos", error);
  }
});

module.exports = router;
