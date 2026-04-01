const express = require("express");
const upload = require("../middlewares/uploadMiddleware");
const blogController = require("../controllers/blogController");
const rateLimit = require("express-rate-limit");

const router = express.Router();

const deleteBlogLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 delete requests per windowMs
});

router.route("/").get(blogController.getAllBlogs);
router.route("/").post(upload.single("imageFile"), blogController.createBlog);
router.route("/:id").put(upload.single("imageFile"), blogController.updateBlog);
router.route("/:id").delete(deleteBlogLimiter, blogController.deleteBlog);
router.route("/add/:id").put(blogController.addComment);

module.exports = router;
