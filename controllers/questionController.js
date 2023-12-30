const {
  Question,
  Course,
  Progress,
  CourseStudent,
  QuestionStudent,
} = require("../models");

const createQuestion = async (req, res) => {
  try {
    const newQuestion = await QuestionStudent.create(req.body);
    res.status(201).json({
      success: true,
      message: "Question answered created successfully",
      data: newQuestion,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Failed to create the question answered",
      error: err.message,
    });
  }
};

const getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.findAll();
    res.status(200).json({
      success: true,
      message: "Questions retrieved successfully",
      data: questions,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve questions",
      error: err.message,
    });
  }
};

const getQuestionById = async (req, res) => {
  try {
    const question = await Question.findByPk(req.params.id);
    if (!question) {
      return res
        .status(404)
        .json({ success: false, message: "Question not found" });
    }
    res.status(200).json({
      success: true,
      message: "Question retrieved successfully",
      data: question,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getQuestionByCourseId = async (req, res) => {
  try {
    const course = await Course.findByPk(req.params.id);

    const question = await Question.findAll({
      where: { courseId: req.params.id },
    });
    if (!question) {
      return res
        .status(404)
        .json({ success: false, message: "Question not found" });
    }
    res.status(200).json({
      success: true,
      message: "Question retrieved successfully",
      course: course,
      data: question,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getQuestionByCourseIdAndStudentId = async (req, res) => {
  try {
    const course = await Course.findByPk(req.params.id);

    Question.hasMany(Progress);
    Question.belongsTo(Course);

    Course.hasMany(CourseStudent);

    const question = await Question.findAll({
      where: { courseId: req.params.id },
      include: [
        {
          model: Progress,
        },
        {
          model: Course,
          include: [
            {
              model: CourseStudent,
              where: {
                userId: req.params.studentId,
              },
            },
          ],
        },
      ],
    });
    if (!question) {
      return res
        .status(404)
        .json({ success: false, message: "Question not found" });
    }
    res.status(200).json({
      success: true,
      message: "Question retrieved successfully",
      course: course,
      data: question,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateQuestionById = async (req, res) => {
  try {
    const [updated] = await Question.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedQuestion = await Question.findByPk(req.params.id);
      res.status(200).json({
        success: true,
        message: "Question updated successfully",
        data: updatedQuestion,
      });
    } else {
      throw new Error("Question not found");
    }
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Failed to update the question",
      error: err.message,
    });
  }
};

const deleteQuestionById = async (req, res) => {
  try {
    const deleted = await Question.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      throw new Error("Question not found");
    }
    res
      .status(200)
      .json({ success: true, message: "Question deleted successfully" });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Failed to delete the question",
      error: err.message,
    });
  }
};

module.exports = {
  createQuestion,
  getAllQuestions,
  getQuestionById,
  updateQuestionById,
  deleteQuestionById,
  getQuestionByCourseId,
  getQuestionByCourseIdAndStudentId,
};
