const express = require("express");
const router = express.Router();
const questionController = require("../controllers/questionController");

// Create a new question
router.post("/", questionController.createQuestion);
// Get all questions
router.get("/", questionController.getAllQuestions);
// Get a specific question by ID
router.get("/:id", questionController.getQuestionById);
router.get("/course/:id", questionController.getQuestionByCourseId);
// Update a question by ID
router.put("/:id", questionController.updateQuestionById);
// Delete a question by ID
router.delete("/:id", questionController.deleteQuestionById);

module.exports = router;
