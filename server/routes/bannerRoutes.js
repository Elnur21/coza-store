const express = require("express");
const multer = require("multer");

const bannerController = require("../controllers/bannerController");

const upload = multer({ dest: "uploads/" });
upload.single("file");

const router = express.Router();

router.route("/").get(bannerController.getAllBanners);
router.route("/").post(upload.single("file"), bannerController.createBanner);
router.route("/:id").put(upload.single("file"), bannerController.updateBanner);
router.route("/:id").delete(bannerController.deleteBanner);

module.exports = router;
