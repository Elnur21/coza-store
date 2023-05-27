const express = require("express");
const slideController = require("../controllers/slideController");

const router = express.Router();

router.route("/").get(slideController.getAllSlides);
router.route("/").post(slideController.createSlide);
router.route("/:id").put(slideController.updateSlide);
router.route("/:id").delete(slideController.deleteSlide);

module.exports = router;
