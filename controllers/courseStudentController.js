const Course = require("../models").Course;
const CourseStudent = require("../models").CourseStudent;
const User = require("../models").User;

const getAllCourseStudents = async (req, res) => {
  try {
    CourseStudent.belongsTo(Course);
    CourseStudent.belongsTo(User);

    const courseStudents = await CourseStudent.findAll({
      include: [
        {
          model: Course,
        },
        {
          model: User,
        },
      ],
    });
    res.status(200).json({
      success: true,
      message: "Courses retrieved successfully",
      data: courseStudents,
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
  getAllCourseStudents,
};
