const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
app.get("/api/contacts", (req, res) => {
  res.status(200).json({ msg: "Get all Contacts" });
});
app.listen(port, () => {
  console.log(`server running on ${port}`);
});
