const express = require("express");
const { body } = require("express-validator");
const authController = require("../controllers/authController");

const router = express.Router();

router.route("/").get(authController.getAllUsers);
router.route("/signup").post(authController.createUser);
router.route("/:id").delete(authController.deleteUser);
router.route("/:id").put(authController.updateUser);

module.exports = router;
