const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const users = require("../data/Users");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, requiered: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// password validation by creation our own method called "matchpassword"
userSchema.methods.matchPassword = async function (enterPassword) {
  return await bcrypt.compare(enterPassword, this.password);
};

// register password hash and store
userSchema.pre("save", async function (next) {
  if(!this.isModified('password')){
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
})

module.exports = mongoose.model("User", userSchema);
