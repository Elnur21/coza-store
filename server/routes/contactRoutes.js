const express = require("express");
const contactController = require("../controllers/contactController");

const router = express.Router();

router.route("/").get(contactController.getAllContacts);
router.route("/").post(contactController.createContact);
router.route("/:id").put(contactController.updateContact);
router.route("/:id").delete(contactController.deleteContact);

module.exports = router;
