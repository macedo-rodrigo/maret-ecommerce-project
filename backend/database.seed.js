const router = require("express").Router();

// Models
const User = require("./models/User");
const Product = require("./models/Product");

// Data
const usersData = require("./data/Users");
const productsData = require("./data/Products");

router.post("/users", async (req, res) => {
  await User.deleteMany({});
  const userSeeder = await User.insertMany(usersData);
  res.send({userSeeder});
});

router.post("/products", async (req, res) => {
  await Product.deleteMany({});
  const productSeeder = await Product.insertMany(productsData);
  res.send({productSeeder});
});

module.exports = router;