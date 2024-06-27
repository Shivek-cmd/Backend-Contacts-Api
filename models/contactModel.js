const mongoose = require("mongoose");
const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Pleas add the contact name"],
    },
    email: {
      type: String,
      required: [true, "Pleas add the contact email address"],
    },
    phone: {
      type: String,
      required: [true, "Pleas add the Phone Number"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Contact", contactSchema);
