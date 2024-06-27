const express = require("express");
const errorHandler = require("./middleware/errorHandler.js");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes.js"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
