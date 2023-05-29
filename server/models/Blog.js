const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },
  comments:{
    type: Number,
    default: 0
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;
