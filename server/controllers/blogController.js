const Blog = require("../models/Blog");
const fs = require("fs");
const path = require("path");

const parentPath = path.join(__dirname, "..");

exports.createBlog = async (req, res) => {
  try {
    const { name, description } = req.body;
    const blog = await Blog.create({
      name,
      description,
      image: req.file.filename,
    });
    res.status(201).json(blog);
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
exports.getAllBlogs = async (req, res) => {
  try {
    const Blogs = await Blog.find();
    res.status(200).json(Blogs);
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    let deletedImage = parentPath + "/uploads/" + blog.image;
    fs.unlink(deletedImage, async (err) => {
      if (err) {
        console.error("Error deleting image:", err);
      } else {
        await Blog.findOneAndDelete({ _id: req.params.id });
        res.status(200).send("Blog has been deleted");
      }
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
exports.updateBlog = async (req, res) => {
  try {
    const { name, description } = req.body;
    const blog = await Blog.findOne({ _id: req.params.id });
    blog.name = name;
    blog.description = description;
    blog.image = req.file.filename;
    blog.save();
    res.status(200).json({
      updated: true,
      blog,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
exports.addComment = async (req, res) => {
  try {
    const blog = await Blog.findOne({ _id: req.params.id });
    blog.comments += 1;
    blog.save();
    res.status(200).json({
      updated: true,
      blog,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
