const express = require("express");
const app = express();

app.post("/health-checkup", function (req, res) {
   const kidneyas = req.body.kidneys; 
});

app.listen(3000);
