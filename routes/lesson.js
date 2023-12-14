const express = require("express");
const router = express.Router();
const lessonController = require("../controllers/lessonController");

// Create a new lesson
router.post("/", lessonController.createLesson);
// Get all lessons
router.get("/", lessonController.getAllLessons);
// Get a specific lesson by ID
router.get("/:id", lessonController.getLessonById);
// Update a lesson by ID
router.put("/:id", lessonController.updateLessonById);
// Delete a lesson by ID
router.delete("/:id", lessonController.deleteLessonById);

module.exports = router;
