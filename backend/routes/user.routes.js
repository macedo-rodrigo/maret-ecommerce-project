const express = require("express");
const userRoute = express.Router();
const AsyncHandler = require("express-async-handler");

userRoute.post(
  "/login",
  AsyncHandler(async (req, res) => {
    const { email, password } = req.body;
  })
);
