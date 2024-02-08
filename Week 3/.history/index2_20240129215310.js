const express = require("express");
const app = express();

app.post("/health-checkup", function (req, res) {
   const kidneyas = req.body.kidneyas; 
});

app.listen(3000);
