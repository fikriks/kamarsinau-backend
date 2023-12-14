const Lesson = require("../models").Lesson;

// Create a new lesson
const createLesson = async (req, res) => {
  try {
    const newLesson = await Lesson.create(req.body);
    res.status(201).json({
      success: true,
      message: "Lesson created successfully",
      data: newLesson,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to create the lesson",
      error: error.message,
    });
  }
};

// Get all lessons
const getAllLessons = async (req, res) => {
  try {
    const lessons = await Lesson.findAll();
    res.status(200).json({
      success: true,
      message: "Lessons retrieved successfully",
      data: lessons,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve lessons",
      error: error.message,
    });
  }
};

// Get a specific lesson by ID
const getLessonById = async (req, res) => {
  try {
    const lesson = await Lesson.findByPk(req.params.id);
    if (!lesson) {
      return res
        .status(404)
        .json({ success: false, message: "Lesson not found" });
    }
    res.status(200).json({
      success: true,
      message: "Lesson retrieved successfully",
      data: lesson,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a lesson by ID
const updateLessonById = async (req, res) => {
  try {
    const [updated] = await Lesson.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedLesson = await Lesson.findByPk(req.params.id);
      res.status(200).json({
        success: true,
        message: "Lesson updated successfully",
        data: updatedLesson,
      });
    }
    throw new Error("Lesson not found");
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to update the lesson",
      error: error.message,
    });
  }
};

// Delete a lesson by ID
const deleteLessonById = async (req, res) => {
  try {
    const deleted = await Lesson.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      throw new Error("Lesson not found");
    }
    res
      .status(200)
      .json({ success: true, message: "Lesson deleted successfully" });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to delete the lesson",
      error: error.message,
    });
  }
};

module.exports = {
  createLesson,
  getAllLessons,
  getLessonById,
  updateLessonById,
  deleteLessonById,
};
