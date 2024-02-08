const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number());
// zod is independent of express its just a validation library
// let the input be :-
// {
//     email: string => email
//     password : at least 8 characters
//     country: "IN" , "US" 
// }
// Zod schema for above input 
const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min,
    country: zod.literal("IN").or(zod.literal("US")),
    kidneys: zod.array(zod.number())
})


app.use(express.json()); // middleware for body

app.post("/health-checkup", function (req, res) {
    // kidneys = [1,2]
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);
  if(!response.success) {
    res.status(411).json({
        msg: "input is invalid"
    })
  }
  else {
    res.send({
        response
      })

  }
  

  //const kidneyLength = kidneys.length;
//   res.send("you have " + kidneyLength + " kidneys");
});

app.use(function(err,req,res,next){
    res.json({
        msg: "sorry something is up with our server"
    })
})

app.listen(3000);