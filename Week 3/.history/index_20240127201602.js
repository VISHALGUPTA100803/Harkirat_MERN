const express = require("express");
const app = express();

app.get("/health-checkup", function (req, res) {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;

  if (username === "vishal" && password === "pass") {
    if (kidneyId == 1 || kidneyId == 2) {
      res.json({
        msg: "your kidney is fine!",
      });
    }
  }
  res.status(400).json({
    msg: "something up with your inputs",
  });
});
