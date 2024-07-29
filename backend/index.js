const express = require("express");
const app = express();
const products = require("./data/Products");

const dotenv = require("dotenv");
dotenv.config()
const PORT = process.env.PORT;

const mongoose = require("mongoose");

// connect db
mongoose.connect("").then(() => console.log("ddbb connected!")).then((err) => {
  err;
});

console.log("probando!")



app.listen(PORT || 3000, ()=>{
  console.log(`server listening on port ${PORT}`)
})