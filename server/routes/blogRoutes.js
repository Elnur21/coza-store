const express = require("express");
const upload = require("../middlewares/uploadMiddleware");
const blogController = require("../controllers/blogController");

const router = express.Router();

router.route("/").get(blogController.getAllBlogs);
router.route("/").post(upload.single("imageFile"), blogController.createBlog);
router.route("/:id").put(upload.single("imageFile"), blogController.updateBlog);
router.route("/:id").delete(blogController.deleteBlog);
router.route("/add/:id").put(blogController.addComment);

module.exports = router;
