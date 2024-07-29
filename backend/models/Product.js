const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    description: { type: String, require: true },
    category: { type: Number, require: true },
    price: { type: Number, require: true },
    stock: { type: Number, require: true },
    image: { type: String, require: true },
    material: { type: String, require: true },
    weight: { type: String, require: true },
    dimensions: { type: Number, require: true },
    stones: { type: String, require: false },
    gender: { type: String, require: false },
  }
);

module.exports = mongoose.model("Product", productSchema);