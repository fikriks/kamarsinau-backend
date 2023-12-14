const { Progress, User } = require("../models");

const getStudentLearningProgress = async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const studentProgress = await Progress.findAll({
      where: { userId: studentId }, 
      include: [{ model: User }],
    });

    if (!studentProgress || studentProgress.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Student progress not found or empty",
      });
    }

    res.status(200).json({
      success: true,
      message: "Student learning progress retrieved successfully",
      data: studentProgress,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve student progress",
      error: error.message,
    });
  }
};

module.exports = {
  getStudentLearningProgress,
};
