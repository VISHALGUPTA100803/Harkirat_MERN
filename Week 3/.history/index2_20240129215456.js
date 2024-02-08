const express = require("express");
const app = express();

app.post("/health-checkup", function (req, res) {
    // 
  const kidneyas = req.body.kidneys;
  const kidneyLength = kidneys.length;
  res.send("you have " + kidneyLength + " kidneys");
});

app.listen(3000);
