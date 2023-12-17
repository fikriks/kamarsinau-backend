const Course = require("../models").Course;
const CourseInstructor = require("../models").CourseInstructor;
const User = require("../models").User;

const getAllCourseInstructors = async (req, res) => {
  try {
     CourseInstructor.belongsTo(Course);
     CourseInstructor.belongsTo(User);

    const courseInstructors = await CourseInstructor.findAll({
      include: [
        {
          model: Course,
        },
        {
          model: User,
        },
      ],
    });
    res
      .status(200)
      .json({
        success: true,
        message: "Courses retrieved successfully",
        data: courseInstructors,
      });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve courses",
      error: err.message,
    });
  }
};

module.exports = {
  getAllCourseInstructors,
};
