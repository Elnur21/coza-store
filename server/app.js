// imports
const express = require("express");
const cors = require("cors");
const body_parser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo");
// const multer = require('multer');
const cardRoutes = require("./routes/cardRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const userRoutes = require("./routes/userRoutes");
const bannerRoutes = require("./routes/bannerRoutes");
const contactRoutes = require("./routes/contactRoutes");
const slideRoutes = require("./routes/slideRoutes");
const blogRoutes = require("./routes/blogRoutes");

// variables
const port = 8080;
const app = express();

// global variables
global.userIN = null;

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

// middlewares
app.use(body_parser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: "my_user",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
    store: MongoStore.create({
      mongoUrl:
        "mongodb+srv://elnurmagerramov:1234@teacherbase.wou1v.mongodb.net/CozaStore?retryWrites=true&w=majority",
    }),
  })
);

// routes
app.use("/", cardRoutes);
app.use("/category", categoryRoutes);
app.use("/user", userRoutes);
app.use("/slide", slideRoutes);
app.use("/contact", contactRoutes);
app.use("/banner", bannerRoutes);
app.use("/blog", blogRoutes);
app.use("/user/login", (req, res, next) => {
  userIN = req.session.userID;
  next();
});

// Start the server on port 8080
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
