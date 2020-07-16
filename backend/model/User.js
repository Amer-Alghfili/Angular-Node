const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User must have a username"]
  },
  password: {
    type: String,
    required: [true, "User must have a password"]
  },
//   confirmPassword: {
//     type: String,
//     required: [true, "User must confirm the entered password"]
//   }
});

module.exports = mongoose.model("users", userSchema);
