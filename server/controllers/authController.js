const User = require("../models/User");

exports.getAllUsers = async (req, res) => {
  try {
    const Users = await User.find();
    res.status(200).json(Users);
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
exports.createUser = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({
        status: "already exist",
        user,
      });
    } else {
      user = await User.create(req.body);
      res.status(201).json({
        status: "success",
        user,
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
exports.deleteUser = async (req, res) => {
  try {
    await User.findOneAndRemove({ _id: req.params.id });
    res.status(200).send("user has been deleted");
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
exports.updateUser = async (req, res) => {
  try {
    const { name, lastName, email, password } = req.body;
    const user = await User.findOne({ _id: req.params.id });
    console.log(user);
    user.name = name;
    user.lastName = lastName;
    user.email = email;
    user.password = password;
    user.save();
    res.status(200).json({
      updated: true,
      user,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
