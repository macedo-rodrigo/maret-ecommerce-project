const express = require("express");
const app = express();

const products = require("./data/Products");
const databaseSeeder = require("./database.seed");

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT;
const DDBB_URL = process.env.DDBB_URL;

const mongoose = require("mongoose");

// connect ddbb
mongoose
  .connect(DDBB_URL)
  .then(() => {
    console.log("Database connected successfully!");
  })
  .then((err) => {
    err;
  });

// database seeder routes
app.use("/api/seed", databaseSeeder);
app.use("", (req, res) => {
  res.send("This is our API");
});

app.listen(PORT || 3000, () => {
  console.log(`Server listening on port ${PORT}`);
});
