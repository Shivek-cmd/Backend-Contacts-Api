const express = require("express");
const errorHandler = require("./middleware/errorHandler.js");
const connectDb = require("./config/dbConnection.js");
const app = express();
const dotenv = require("dotenv").config();
connectDb();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes.js"));
app.use("/api/users", require("./routes/userRoutes.js"));
app.use(errorHandler);
app.get("/api/contacts", (req, res) => {
  res.json({ message: "Get all contacts" });
});
app.listen(port, () => {
  console.log(`server running on ${port}`);
});
