const express = require("express");
const app = express();
const products = require("./data/Products");

const dotenv = require("dotenv");
dotenv.config()
const PORT = process.env.PORT;
const DDBB_URL = process.env.DDBB_URL;

const mongoose = require("mongoose");

// connect ddbb
mongoose.connect(DDBB_URL).then((err) => {
  err;
});



app.listen(PORT || 3000, ()=>{
  console.log(`server listening on port ${PORT}`)
})