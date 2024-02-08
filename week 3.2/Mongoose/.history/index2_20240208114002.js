const mongoose = require("mongoose");
const express = require("express");

const app = express();
app.use(express.json());

mongoose.connect(
  "mongodb+srv://vgpt007:4EV9OBMtqBIz030w@cluster0.hulezvc.mongodb.net/userappnew" // It should include the database name at the end.
);

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});
app.post("/signup", function(req,res) {
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;
    const existingUser = User.findOne({email: username});

    if(existingUser) {
        return res.status(403).json({
            msg: "User already exists",
        });
    }
    const user = new User({
        name: name,
        email: username,
        password: password,
      });
      
      user.save();
      res.json({
        msg: "User created",
      });
    
});

app.listen(3000);

