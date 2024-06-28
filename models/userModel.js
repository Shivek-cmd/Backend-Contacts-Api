const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    username: { type: String, required: [true, "please add username"] },
    email: {
      type: String,
      require: [true, "please add user email address"],
      unique: [true, "Email address already taken"],
    },
    password: {
      type: String,
      require: [true, "please add the user password"],
    },
  },
  { timestamp: true }
);
module.exports = mongoose.model("User", userSchema);
