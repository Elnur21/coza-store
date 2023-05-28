const express = require("express");
const upload = require("../middlewares/uploadMiddleware");
const bannerController = require("../controllers/bannerController");

const router = express.Router();

router.route("/").get(bannerController.getAllBanners);
router
  .route("/")
  .post(upload.single("imageFile"), bannerController.createBanner);
router
  .route("/:id")
  .put(upload.single("imageFile"), bannerController.updateBanner);
router.route("/:id").delete(bannerController.deleteBanner);

module.exports = router;
