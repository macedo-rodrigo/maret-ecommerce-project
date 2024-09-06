const express = require("express");
const userRoute = express.Router();
const AsyncHandler = require("express-async-handler");

// model
const User = require("../models/User");

userRoute.post(
  "/login",
  AsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: null,
        createdAt: user.createdAt,
      });
    } else {
      res.status(401);
      throw new Error("Invalid Email or Password");
    }
  })
);

// register route
userRoute.post('/register', AsyncHandler(async(req, res)=>{
  const { name, email, password } = req.body;
  const existuser = await User.findOne({ email });
  if(existuser){
    res.status(400);
    throw new Error("An account was already created with this email")
  } else{
    const user = await User.create({
      name,
      lastName,
      email,
      password
    })

    if(user){
      res.status(201).json({
        _id: user._id,
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        isAdmin: user.isAdmin,
        createdAt: user.createdAt,
      });
      res

    } else {
      res.status(400);
      throw new Error("Invalid User Data")
    }
  }

}))

module.exports = userRoute;
