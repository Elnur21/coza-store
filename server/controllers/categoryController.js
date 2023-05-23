const Category = require("../models/Category");
const Card = require("../models/Card");

exports.getAllCategories = async (req, res) => {
  try {
    const Categories = await Category.find();
    res.status(200).json(Categories);
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
exports.createCategory = async (req, res) => {
  try {
    const Category = await Category.create(req.body);
    res.status(201).json(Category);
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
exports.deleteCategory = async (req, res) => {
  try {
    await Category.findOneAndRemove({ _id: req.params.id });
    await Card.deleteMany({ category: req.params.id });
    res.status(200).send("Category has been deleted");
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
