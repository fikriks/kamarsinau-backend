const express = require("express");
const router = express.Router();
const courseInstructorController = require("../controllers/courseInstructorController");

router.get("/", courseInstructorController.getAllCourseInstructors);

module.exports = router;
