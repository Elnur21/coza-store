// imports
const express = require("express");
const cors = require("cors");
const body_parser = require("body-parser");
const userData = require("./data/data");

// variables
const port = 8080;
const app = express();

// middleware
app.use(body_parser.json());
app.use(cors());

// routes
app.get("/", (req, res) => {
  // console.log("datalar getdi");
  res.json(userData);
});

// Start the server on port 8080
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
