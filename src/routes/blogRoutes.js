const express = require("express");
const { check } = require("express-validator");

const router = express.Router();
const blogController = require("../controller/blog");
router.post(
  "/post",
  check("title")
    .isLength({ min: 5 })
    .withMessage("Title must be at least 5 chars long"),
  check("desc")
    .isLength({ min: 5 })
    .withMessage("Description must be at least 5 chars long"),
  blogController.blog
);

module.exports = router;
