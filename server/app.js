// imports
const express = require("express");
const cors = require("cors");
const body_parser = require("body-parser");
const mongoose = require("mongoose");
// const multer = require('multer');

const cardRoutes = require("./routes/cardRoutes");
const cardRoutes = require("./routes/categoryRoutes");

// variables
const port = 8080;
const app = express();

// Connect DB
mongoose
  .connect(
    "mongodb+srv://elnurmagerramov:1234@teacherbase.wou1v.mongodb.net/CozaStore?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("MongoDB database connection successful");
  })
  .catch((err) => {
    console.error("MongoDB database connection error: " + err);
  });

// middleware
app.use(body_parser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.use("/", cardRoutes);
app.use("/category", categoryRoutes);
// app.use("/user", userRoutes);



// Start the server on port 8080
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
