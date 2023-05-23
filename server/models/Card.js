const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: Number,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  //   category: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Category",
  //   },
});

const Card = mongoose.model("Card", CardSchema);

module.exports = Card;
