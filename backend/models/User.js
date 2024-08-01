const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
const users = require("../data/Users");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, requiered: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
