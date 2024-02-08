const express = require("express");
const app = express();

app.use(express.json()); // middleware for body

app.post("/health-checkup", function (req, res) {
    // kidneys = [1,2]
  const kidneys = req.body.kidneys;
  const kidneyLength = kidneys.length;
  res.send("you have " + kidneyLength + " kidneys");
});

// global catches 
//if any of the route does not work 
// then this will be called
//
app.use(function(err,req,res,next){
    res.json({
        msg: "sorry something is up with our server"
    })
})

app.listen(3000);
