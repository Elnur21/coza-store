const fs = require("fs");
const path = require("path");

const Card = require("../models/Card");
const User = require("../models/User");
const parentPath = path.join(__dirname, "..");

exports.getAllCards = async (req, res) => {
  try {
    const Cards = await Card.find();
    res.status(200).json(Cards);
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
exports.createCard = async (req, res) => {
  try {
    const { name, price, category } = req.body;
    const card = await Card.create({
      name,
      price,
      category,
      image: req.file.filename,
    });
    res.status(201).json(card);
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
exports.deleteCard = async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);
    let deletedImage = parentPath + "/uploads/" + card.image;
    fs.unlink(deletedImage, async (err) => {
      if (err) {
        console.error("Error deleting image:", err);
      } else {
        await Card.findOneAndDelete({ _id: req.params.id });
        res.status(200).send("card has been deleted");
      }
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
exports.updateCard = async (req, res) => {
  try {
    const { name, price, category } = req.body;
    const card = await Card.findOne({ _id: req.params.id });
    console.log(card);
    card.name = name;
    card.image = req.file.filename;
    card.price = price;
    card.category = category;
    card.save();
    res.status(200).json({
      updated: true,
      card,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

exports.addToCart = async (req, res) => {
  try {
    const user = await User.findById(userIN);
    await user.cart.addToSet(req.body);
    await user.save();

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
exports.removeFromCart = async (req, res) => {
  try {
    const user = await User.findById(userIN);
    await user.cart.pull({ _id: req.params.id });
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

exports.addToLike = async (req, res) => {
  try {
    const user = await User.findById(userIN);
    await user.likes.addToSet({ _id: req.params.id });
    await user.save();

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
exports.removeFromLike = async (req, res) => {
  try {
    const user = await User.findById(userIN);
    await user.likes.pull({ _id: req.params.id });
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
