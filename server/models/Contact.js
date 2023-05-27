const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  communication: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  information: {
    type: String,
    required: true,
    trim: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;
