const express = require("express");
const app = express();
const port = 3000;

// middleware -> function that runs before your main logic

app.get(
  "/",
  (req, res, next) => {
    console.log("in first");
    next()
  },
  (req, res) => {
    res.status(200);
    res.json(req.query);
  }
);

app.listen(port);
