const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("./model/User");
// const bodyParser = require("body-parser");

const app = express();

// app.use(bodyParser.json());

const signToken = id => {
  return jwt.sign({ id }, "secret", {
    expiresIn: "30d"
  });
};

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
}); 
 
// app.use('/', async (req, res) => {
//     res.json({d: 'd'});
// });
// app.use("/register", async (req, res) => { 
//   const newUser = await User.create(...req.body);
//   console.log(newUser);
//   const token = signToken(newUser._id);
//   res.status(201).json({
//     status: "success",
//     data: {
//       newUser,
//       token
//     }
//   });
// });

app.post("/login", async (req, res) => {
  try {
    const { name, password } = req.body;
    console.log(req.body);
    const user = await User.findOne({ name, password });
    console.log(user);
    if (!user) {
      res.status(404).json({
        status: "fail",
        message: "User not found"
      });
    }
    const token = signToken(user._id);
    console.log("hi");
    res.status(201).json({
      status: "success",
      data: {
        status: "success",
        user,
        token
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err
    });
  }
});

module.exports = app;
