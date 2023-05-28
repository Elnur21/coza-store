const express = require("express");
const blogController = require("../controllers/blogController");

const router = express.Router();

router.route("/").get(blogController.getAllBlogs);
router.route("/").post(blogController.createBlog);
router.route("/:id").put(blogController.updateBlog);
router.route("/:id").delete(blogController.deleteBlog);
router.route("/add/:id").put(blogController.addComment);

module.exports = router;
