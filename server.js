const express = require("express");
const dotenv = require("dotenv").config();
const sequelize = require("./config/dbConnection");
const User = require("./models/User")

const app = express();
const port = process.env.PORT || 5001;
User.sync({ alter: true })

app.use("/api/user", require("./routes/userRoutes"));

app.listen(port, (error) => {
  if (!error) {
    console.log(`Server is successfully running on port ${port}`);
  } else {
    console.log("Error occurred, server can't start", error);
  }
});
