const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number());

app.use(express.json()); // middleware for body

app.post("/health-checkup", function (req, res) {
    // kidneys = [1,2]
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);
  if()
  res.send({
    response
  })

  //const kidneyLength = kidneys.length;
//   res.send("you have " + kidneyLength + " kidneys");
});

app.use(function(err,req,res,next){
    res.json({
        msg: "sorry something is up with our server"
    })
})

app.listen(3000);