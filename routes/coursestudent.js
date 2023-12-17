const express = require("express");
const router = express.Router();
const courseStudentController = require("../controllers/courseStudentController");

router.get("/", courseStudentController.getAllCourseStudents);

module.exports = router;
