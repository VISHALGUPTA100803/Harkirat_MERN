const express = require("express");
const app = express();

app.get("/health-checkup", function (req, res) {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req..kidneyId;

  if (username === "vishal" && password === "pass") {
    res.json({
      msg: "your kidney is fine!",
    });
  }
});
