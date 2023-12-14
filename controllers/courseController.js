const Course = require("../models").Course;

// Create a new course
const createCourse = async (req, res) => {
  try {
    const newCourse = await Course.create(req.body);
    res
      .status(201)
      .json({
        success: true,
        message: "Course created successfully",
        data: newCourse,
      });
  } catch (err) {
    res
      .status(400)
      .json({
        success: false,
        message: "Failed to create the course",
        error: error.message,
      });
  }
};

// Get all courses
const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.findAll();
    res.status(200).json({ success: true, message: 'Courses retrieved successfully', data: courses });
  } catch (err) {
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to retrieve courses",
        error: error.message,
      });
  }
};

// Get a specific course by ID
const getCourseById = async (req, res) => {
  try {
    const course = await Course.findByPk(req.params.id);
    if (!course) {
      return res
        .status(404)
        .json({ success: false, message: "Course not found" });
    }
    res
      .status(200)
      .json({
        success: true,
        message: "Course retrieved successfully",
        data: course,
      });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a course by ID
const updateCourseById = async (req, res) => {
  try {
    const [updated] = await Course.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedCourse = await Course.findByPk(req.params.id);
      res
        .status(200)
        .json({
          success: true,
          message: "Course updated successfully",
          data: updatedCourse,
        });
    }
    throw new Error("Course not found");
  } catch (err) {
    res
      .status(400)
      .json({
        success: false,
        message: "Failed to update the course",
        error: error.message,
      });
  }
};

// Delete a course by ID
const deleteCourseById = async (req, res) => {
  try {
    const deleted = await Course.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      throw new Error("Course not found");
    }
    res
      .status(200)
      .json({ success: true, message: "Course deleted successfully" });
  } catch (err) {
    res
      .status(400)
      .json({
        success: false,
        message: "Failed to delete the course",
        error: error.message,
      });
  }
};

module.exports = {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourseById,
  deleteCourseById,
};
