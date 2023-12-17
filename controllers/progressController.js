const { Progress, User, Module, CourseStudent, Course } = require("../models");

const getStudentLearningProgress = async (req, res) => {
  try {
    const courseId = req.params.courseId;

    CourseStudent.belongsTo(User);
    CourseStudent.belongsTo(Course);

    Course.hasMany(Module);
    Course.hasMany(Progress);

    const courseStudent = await CourseStudent.findAll({
      where: { courseId: courseId },
      include: [
        {
          model: User
        },
        {
          model: Course,
          include: [
            {
              model: Module
            },
            {
              model: Progress
            }
          ]
        }
      ],
    });

    res.status(200).json({
      success: true,
      message: "Student learning progress retrieved successfully",
      data: courseStudent,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve student progress",
      error: error.message,
    });
  }
};

const addProgress = async (req, res) => {
  try {
    const addProgress = await Progress.create(req.body);
    res.status(201).json({
      success: true,
      message: "Progress created successfully",
      data: addProgress,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Failed to add the progress",
      error: err.message,
    });
  }
};

module.exports = {
  getStudentLearningProgress,
  addProgress,
};
