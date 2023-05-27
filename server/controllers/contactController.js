const Contact = require("../models/Contact");

exports.createContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json(contact);
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
exports.deleteContact = async (req, res) => {
  try {
    await Contact.findOneAndRemove({ _id: req.params.id });
    res.status(200).send("Contact has been deleted");
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
exports.updateContact = async (req, res) => {
  try {
    const { communication, information } = req.body;
    const contact = await Contact.findOne({ _id: req.params.id });
    contact.communication = communication;
    contact.information = information;
    contact.save();
    res.status(200).json({
      updated: true,
      contact,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
