const express = require("express");
const cardController = require("../controllers/cardController");

const router = express.Router();

router.route("/").get(cardController.getAllCards);
router.route("/").post(cardController.createCard);
router.route("/:id").delete(cardController.deleteCard);
router.route("/:id").put(cardController.updateCard);
router.route("/addCart/:id").post(cardController.addToCart);
router.route("/removeCart/:id").post(cardController.removeFromCart);
router.route("/addLike/:id").post(cardController.addToLike);
router.route("/removeLike/:id").post(cardController.removeFromLike);

module.exports = router;
