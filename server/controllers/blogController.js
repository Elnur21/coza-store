const Blog = require("../models/Blog");

exports.createBlog = async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
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
    await Blog.findOneAndRemove({ _id: req.params.id });
    res.status(200).send("Blog has been deleted");
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
exports.updateBlog = async (req, res) => {
  try {
    const { name, description, image } = req.body;
    const blog = await Blog.findOne({ _id: req.params.id });
    blog.name = name;
    blog.description = description;
    blog.image = image;
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
