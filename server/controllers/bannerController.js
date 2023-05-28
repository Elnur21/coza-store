const Banner = require("../models/Banner");

exports.createBanner = async (req, res) => {
  try {
    const banner = await Banner.create(req.body);
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
    const { name, description, image } = req.body;
    const banner = await Banner.findOne({ _id: req.params.id });
    banner.name = name;
    banner.description = description;
    banner.image = image;
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
