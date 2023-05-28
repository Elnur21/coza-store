const Banner = require("../models/Banner");
const fs = require("fs");


exports.createBanner = async (req, res) => {
  try {
    const {name,description} = req.body
    const banner = await Banner.create({
      name,
      description,
      image:req.file.filename
    });
    res.status(201).json(banner);
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
exports.getAllBanners = async (req, res) => {
  try {
    const Banners = await Banner.find();
    res.status(200).json(Banners);
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
exports.deleteBanner = async (req, res) => {
  try {
    await Banner.findOneAndRemove({ _id: req.params.id });
    res.status(200).send("Banner has been deleted");
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
exports.updateBanner = async (req, res) => {
  try {
    const { name, description } = req.body;
    const banner = await Banner.findOne({ _id: req.params.id });
    banner.name = name;
    banner.description = description;
    banner.image = req.file.filename;
    banner.save();
    res.status(200).json({
      updated: true,
      banner,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
