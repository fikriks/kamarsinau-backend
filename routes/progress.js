const express = require("express");
const router = express.Router();
const progressController = require("../controllers/progressController");

// Define a route to get a student's learning progress by ID
router.get(
  "/course/:courseId",
  progressController.getStudentLearningProgress
);

router.post("/", progressController.addProgress);

module.exports = router;
