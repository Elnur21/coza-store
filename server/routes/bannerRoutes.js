const express = require("express");
const bannerController = require("../controllers/bannerController");

const router = express.Router();

router.route("/").get(bannerController.getAllBanners);
router.route("/").post(bannerController.createBanner);
router.route("/:id").put(bannerController.updateBanner);
router.route("/:id").delete(bannerController.deleteBanner);

module.exports = router;
