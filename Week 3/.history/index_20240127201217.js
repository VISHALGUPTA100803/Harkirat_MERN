const express = require("express");
const app = express();

app.get("/health-checkup", function (req, res) {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;

  if (username === "vishal" && password === "pass") {
    if(kidneyId === "1" || kidneyId === "2" || kidneyId === "3" || kidneyId === "4" || kidneyId === "5" || kidneyId === "6" || kidneyId === "7" || kidneyId === "8" || kidneyId === "9" || kidneyId === "10" || kidneyId === "11" || kidneyId === "12" || kidneyId === "13" || kidneyId === "14" || kidneyId === "15" || kidneyId === "16" || kidneyId === "17" || kidneyId === "18" || kidneyId === "19" || kidneyId === "20" || kidneyId === "21" || kidneyId === "22" || kidneyId === "23" || kidneyId === "24" || kidneyId === "25" || kidneyId === "26" || kidneyId === "27" || kidneyId === "28" || kidneyId === "29" || kidneyId === "30" || kidneyId === "31" || kidneyId === "32" || kidneyId === "33" || kidneyId === "34" || kidneyId === "35" || kidneyId === "36" || kidneyId === "37" || kidneyId === "38" || kidneyId === "39" || kidneyId === "40" || kidneyId === "41" || kidneyId === "42" || kidneyId === "43" || kidneyId === "44" || kidneyId === "45" || kidneyId === "46" || kidneyId === "47" || kidneyId === "48" || kidneyId === "49" || kidneyId === "50" || kidneyId === "51" || kidneyId === "52" || kidneyId === "53" || kidneyId === "54" || kidneyId === "55" || kidneyId === "56" || kidneyId === "57" || kidneyId === "58" || kidneyId === "59" || kidneyId === "60" || kidneyId === "61" || kidneyId === "62" || kidneyId === "63" || kidneyId === "64" || kidneyId === "65" || kidneyId === "66" || kidneyId === "67" || kidneyId === "68" || kidneyId === "69" || kidneyId === "70" || kidneyId === "71" || kidneyId === "72" || kidneyId){
      res.json({
        msg: "your kidney is fine!",
      });
    res.json({
      msg: "your kidney is fine!",
    });
  }
});
