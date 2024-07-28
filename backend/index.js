const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config()
const PORT = process.env.PORT;

// Test router
app.get("/", (req, res) => {
  res.send("Oh yes! The app is running!")
});





app.listen(PORT || 3000, ()=>{
  console.log(`server listening on port ${PORT}`)
})