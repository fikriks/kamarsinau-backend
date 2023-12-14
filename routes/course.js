const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");

// Create a new course
router.post("/", courseController.createCourse);
// Get all courses
router.get("/", courseController.getAllCourses);
// Get a specific course by ID
router.get("/:id", courseController.getCourseById);
// Update a course by ID
router.put("/:id", courseController.updateCourseById);
// Delete a course by ID
router.delete("/:id", courseController.deleteCourseById);

module.exports = router;
