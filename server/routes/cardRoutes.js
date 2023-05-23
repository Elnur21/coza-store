const express = require("express");
const cardController = require("../controllers/cardController");

const router = express.Router();

router.route("/").get(cardController.getAllCards);
router.route("/").post(cardController.createCard);
router.route("/:id").delete(cardController.deleteCard);
router.route("/:id").put(cardController.updateCard);

module.exports = router;
