const Card = require("../models/Card");

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
    const card = await Card.create(req.body);
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
    await Card.findOneAndRemove({ _id: req.params.id });
    res.status(200).send("card has been deleted");
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
exports.updateCard = async (req, res) => {
  try {
    const { name, image, price, category } = req.body;
    const card = await Card.findOne({ _id: req.params.id });
    console.log(card);
    card.name = name;
    card.image = image;
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
