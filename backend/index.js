const express = require("express");
const cors = require("cors");
const app = express();
require("./DB/config");
const User = require("./DB/User");
const exerciseRoute = require("./Routes/exercise");

app.use(express.json());
app.use(cors());

app.post("/signup", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  result.toObject();
  delete result.password;
  res.send(result);
});

app.post("/login", async (req, res) => {
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      res.send(user);
    } else {
      res.send({ response: "User not found !" });
    }
  } else {
    res.send({ response: "User not found !" });
  }
});

app.use("/exercise", exerciseRoute);

const port = 4001;
app.listen(port, () => {
  console.log("connected to " + port);
});
