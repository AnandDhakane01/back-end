var router = require("express").Router();
var path = require("path");
var fs = require("fs");
const { builtinModules } = require("module");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/html/index.html"));
});

router.get("/video", (req, res) => {
  const range = req.headers.range;
  console.log(range);
  if (!range) {
    res.status(400).send("Range is required");
  }

  const videoPath = path.join(__dirname, "../public/videos/vdoone.mp4");
  const videoSize = fs.statSync(videoPath).size;

  const CHUNK_SIZE = 10 ** 6; //1MB

  const start = Number(range.replace(/\D/g, ""));
  const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

  const contentLength = end - start + 1;

  const headers = {
    "Content-Range": `bytes ${start}-${end}/${videoSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": contentLength,
    "Content-type": "video/mp4",
  };

  res.writeHead(206, headers);

  const videostream = fs.createReadStream(videoPath, { start, end });

  videostream.pipe(res);
});

module.exports = router;
