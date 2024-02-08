const express = require("express");
const app = express();

app.use(express.json()); // middleware for body

app.post("/health-checkup", function (req, res) {
    // kidneys = [1,2]
  const kidneyas = req.body.kidneys;
  const kidneyLength = kidneys.length;
  res.send("you have " + kidneyLength + " kidneys");
});

app.listen(3000);
